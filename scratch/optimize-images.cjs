const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const assetsDir = path.join(process.cwd(), "src", "assets");
const files = fs.readdirSync(assetsDir);

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    const ext = path.extname(file).toLowerCase();
    const buf = fs.readFileSync(filePath);
    totalBefore += buf.length;

    let optimized = null;
    if (ext === ".jpg" || ext === ".jpeg") {
      optimized = await sharp(buf)
        .resize(1920, 1920, { fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 84, mozjpeg: true })
        .toBuffer();
    } else if (ext === ".png" && file !== "logo-bintan.png") {
      optimized = await sharp(buf)
        .resize(1920, 1920, { fit: "inside", withoutEnlargement: true })
        .png({ quality: 85, compressionLevel: 9, effort: 8 })
        .toBuffer();
    }

    if (optimized && optimized.length < buf.length) {
      fs.writeFileSync(filePath, optimized);
      totalAfter += optimized.length;
      console.log(
        `${file}: ${(buf.length / 1024).toFixed(1)} KB -> ${(optimized.length / 1024).toFixed(1)} KB (${Math.round((1 - optimized.length / buf.length) * 100)}% saved)`,
      );
    } else {
      totalAfter += buf.length;
    }
  }

  console.log(
    `\nTOTAL ASSETS: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB (${Math.round((1 - totalAfter / totalBefore) * 100)}% total reduction)`,
  );
}

run();
