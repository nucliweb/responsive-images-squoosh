import fs from "fs";
import { exec } from "child_process";

import {
  ENCODE_OPTIONS,
  FORMATS,
  IMAGES,
  ORIGINALS,
  PATTERN,
} from "./config.js";

const imagePattern = new RegExp(PATTERN, "i");

// Remove images folder to delete previous optimized images
if (fs.existsSync(IMAGES)) {
  fs.rmSync(IMAGES, { recursive: true });
}

// Read original folder to get all images to optimize
fs.readdirSync(ORIGINALS).forEach((file) => {
  const isImageFile = imagePattern.test(file);

  if (isImageFile) {
    FORMATS.map(async ({ width, format, suffix }) => {
      const originalImage = `${ORIGINALS}${file}`;
      const command = `squoosh-cli 
                        --resize '{"width":${width}}' 
                        --${format} '${ENCODE_OPTIONS[format]}' 
                        --output-dir '${IMAGES}' 
                        --suffix '${suffix}' 
                        ${originalImage}`;

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    });
  }
});
