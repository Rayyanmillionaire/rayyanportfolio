const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const path = require('path');

const inputPath = 'file:///C:/Users/ZBOOK/.gemini/antigravity/brain/def714fb-5c23-4315-8daa-2d0cc550826d/media__1784358113772.jpg';
const outputPath = path.join(__dirname, 'public', 'profile.png');

async function processImage() {
  console.log('Removing background...');
  try {
    const blob = await removeBackground(inputPath);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log('Background removed and saved to', outputPath);
  } catch (error) {
    console.error("Failed to remove background:", error);
  }
}

processImage();
