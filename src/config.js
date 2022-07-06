export const ORIGINALS = "./originals/";
export const IMAGES = "./images/";
export const PATTERN = ".(jpe?g|png|tif?f|avif)$";
export const FORMATS = [
  // jpeg
  { width: 640, format: "mozjpeg", suffix: "-640" },
  { width: 800, format: "mozjpeg", suffix: "-800" },
  { width: 1200, format: "mozjpeg", suffix: "-1200" },
  { width: 1400, format: "mozjpeg", suffix: "-1400" },
  // webp
  { width: 640, format: "webp", suffix: "-640" },
  { width: 800, format: "webp", suffix: "-800" },
  { width: 1200, format: "webp", suffix: "-1200" },
  { width: 1400, format: "webp", suffix: "-1400" },
  // avif
  { width: 640, format: "avif", suffix: "-640" },
  { width: 800, format: "avif", suffix: "-800" },
  { width: 1200, format: "avif", suffix: "-1200" },
  { width: 1400, format: "avif", suffix: "-1400" },
  // jxl
  { width: 640, format: "jxl", suffix: "-640" },
  { width: 800, format: "jxl", suffix: "-800" },
  { width: 1200, format: "jxl", suffix: "-1200" },
  { width: 1400, format: "jxl", suffix: "-1400" },
];
export const ENCODE_OPTIONS = {
  avif: "{ cqLevel: 33 }",
  jxl: "{ quality: 75 }",
  mozjpeg: "{ quality: 75 }",
  webp: "{ quality: 75 }",
};
