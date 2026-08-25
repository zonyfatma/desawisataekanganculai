const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const files = [
  "ekang-gotong-royong-kkn.jpg",
  "kegiatan-batik-1.jpg",
  "kegiatan-batik-2.jpg",
  "kegiatan-batik-3.jpg",
];

async function optimize() {
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    if (!fs.existsSync(filePath)) continue;

    const inputBuffer = fs.readFileSync(filePath);
    const statsBefore = inputBuffer.length;
    const outputBuffer = await sharp(inputBuffer).jpeg({ quality: 82, mozjpeg: true }).toBuffer();

    if (outputBuffer.length < statsBefore) {
      fs.writeFileSync(filePath, outputBuffer);
      console.log(
        `Optimized ${file}: ${statsBefore} -> ${outputBuffer.length} bytes (${Math.round((1 - outputBuffer.length / statsBefore) * 100)}% smaller)`,
      );
    } else {
      console.log(`Skipped ${file}: already optimal`);
    }
  }
}

optimize().catch(console.error);
