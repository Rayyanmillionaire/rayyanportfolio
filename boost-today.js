const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const numCommits = 100; // Increase this if you want even more for today!
const targetFile = 'heatmap-today.txt';

console.log(`Generating ${numCommits} commits specifically for TODAY...`);

for (let i = 0; i < numCommits; i++) {
  // Use today's date but randomize the hours and minutes slightly so git treats them as distinct commits
  const date = new Date();
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  date.setSeconds(Math.floor(Math.random() * 60));
  
  const dateString = date.toISOString();

  // Make a change
  const fileContent = `Commit for TODAY ${dateString} - iteration ${i}\n`;
  fs.appendFileSync(path.join(__dirname, targetFile), fileContent);

  // Stage and commit
  execSync(`git add ${targetFile}`);
  
  const env = { 
    ...process.env, 
    GIT_AUTHOR_DATE: dateString, 
    GIT_COMMITTER_DATE: dateString 
  };
  
  try {
    execSync(`git commit -m "chore: boost today's contributions ${i + 1}"`, { env, stdio: 'ignore' });
  } catch (err) {
    console.error(`Failed on iteration ${i}`);
  }
}

console.log("Done generating commits for today!");
