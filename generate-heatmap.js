const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const numCommits = 100; // Number of fake commits to generate
const daysToSpread = 60; // Spread commits over the last 60 days
const targetFile = 'heatmap.txt';

console.log(`Generating ${numCommits} commits to make your GitHub heatmap green...`);

// Ensure git is initialized
try {
  execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
} catch (e) {
  console.log("Initializing git repository...");
  execSync('git init');
}

for (let i = 0; i < numCommits; i++) {
  // 1. Calculate a random date in the past
  const daysAgo = Math.floor(Math.random() * daysToSpread);
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  
  // Randomize the time slightly
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  
  const dateString = date.toISOString();

  // 2. Make a change to a dummy file
  const fileContent = `Commit generated for heatmap at ${dateString}\n`;
  fs.appendFileSync(path.join(__dirname, targetFile), fileContent);

  // 3. Stage the change
  execSync(`git add ${targetFile}`);

  // 4. Commit with the spoofed date
  const commitMessage = `chore: heatmap generation commit ${i + 1}`;
  
  // Set both AUTHOR and COMMITTER dates for GitHub to register it correctly on the heatmap
  const env = { 
    ...process.env, 
    GIT_AUTHOR_DATE: dateString, 
    GIT_COMMITTER_DATE: dateString 
  };
  
  try {
    execSync(`git commit -m "${commitMessage}"`, { env, stdio: 'ignore' });
  } catch (err) {
    console.error(`Failed to commit on ${dateString}`);
  }
}

console.log("\n✅ Successfully generated heatmap commits!");
console.log("\n⚠️ IMPORTANT NEXT STEPS:");
console.log("1. Create a new empty repository on GitHub.");
console.log("2. Link it by running: git remote add origin <YOUR_GITHUB_REPO_URL>");
console.log("3. Push all commits by running: git push -u origin master");
