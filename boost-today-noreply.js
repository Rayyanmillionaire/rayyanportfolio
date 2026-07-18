const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetFile = 'heatmap-noreply.txt';
const githubUsername = "Rayyanmillionaire";
const exactGithubEmail = `${githubUsername}@users.noreply.github.com`;

console.log(`Generating 150 commits for TODAY using foolproof email: ${exactGithubEmail}...`);

for (let i = 0; i < 150; i++) {
  const date = new Date();
  
  // Randomize time today to prevent identical timestamps
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  date.setSeconds(Math.floor(Math.random() * 60));
  
  const dateString = date.toISOString();

  fs.appendFileSync(path.join(__dirname, targetFile), `Today Commit ${i} at ${dateString}\n`);
  execSync(`git add ${targetFile}`);
  
  const env = { 
    ...process.env, 
    GIT_AUTHOR_DATE: dateString, 
    GIT_COMMITTER_DATE: dateString,
    GIT_AUTHOR_EMAIL: exactGithubEmail,
    GIT_COMMITTER_EMAIL: exactGithubEmail,
    GIT_AUTHOR_NAME: githubUsername,
    GIT_COMMITTER_NAME: githubUsername
  };
  
  try {
    execSync(`git commit -m "chore: supercharge today ${i + 1}"`, { env, stdio: 'ignore' });
  } catch (err) {}
}

console.log("Done! Pushing to GitHub...");
