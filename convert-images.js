#!/usr/bin/env node

/**
 * Image conversion script - converts JPG, PNG, GIF to WebP format
 * Run with: node convert-images.js
 *
 * Requires: npm install --save-dev sharp
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

const imagesToConvert = [
  { input: "cofe1.jpg", output: "cofe1.webp" },
  { input: "logoorg.png", output: "logoorg.webp" },
  { input: "black.gif", output: "black.webp" },
  { input: "coffee.jpg", output: "coffee.webp" },
  { input: "logo.png", output: "logo.webp" },
  { input: "logo1.png", output: "logo1.webp" },
];

async function convertImages() {
  console.log("🖼️  Starting image conversion to WebP...\n");

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const image of imagesToConvert) {
    const inputPath = path.join(publicDir, image.input);
    const outputPath = path.join(publicDir, image.output);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipped: ${image.output} (already exists)`);
      skipped++;
      continue;
    }

    // Skip if source doesn't exist
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipped: ${image.input} (source not found)`);
      skipped++;
      continue;
    }

    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const reduction = Math.round(
        ((inputSize - outputSize) / inputSize) * 100,
      );

      console.log(
        `✅ Converted: ${image.input} → ${image.output} (${reduction}% smaller)`,
      );
      converted++;
    } catch (error) {
      console.error(`❌ Failed: ${image.input} - ${error.message}`);
      failed++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Converted: ${converted}`);
  console.log(`  ⏭️  Skipped: ${skipped}`);
  console.log(`  ❌ Failed: ${failed}`);
}

convertImages().catch(console.error);
