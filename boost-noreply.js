const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetFile = 'heatmap-noreply.txt';

// The ultimate fallback: GitHub's mandatory no-reply email tied directly to the username
const githubUsername = "Rayyanmillionaire";
const exactGithubEmail = `${githubUsername}@users.noreply.github.com`;

console.log(`Generating massive commits using foolproof email: ${exactGithubEmail}...`);

// Generate 1000 commits spread over the last 365 days for maximum green!
for (let i = 0; i < 1000; i++) {
  const daysAgo = Math.floor(Math.random() * 365);
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  
  const dateString = date.toISOString();

  fs.appendFileSync(path.join(__dirname, targetFile), `Massive Commit ${i} at ${dateString}\n`);
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
    execSync(`git commit -m "chore: massive heatmap boost ${i + 1}"`, { env, stdio: 'ignore' });
  } catch (err) {}
}

console.log("Done! Pushing to GitHub...");
