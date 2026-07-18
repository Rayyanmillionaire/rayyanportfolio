const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
  console.log(`\nScores for ${data.finalUrl}:`);
  console.log(`- Performance: ${data.categories.performance.score * 100}`);
  console.log(`- Accessibility: ${data.categories.accessibility.score * 100}`);
  console.log(`- Best Practices: ${data.categories['best-practices'].score * 100}`);
  console.log(`- SEO: ${data.categories.seo.score * 100}\n`);
} catch (err) {
  console.error("Error reading file:", err.message);
}
