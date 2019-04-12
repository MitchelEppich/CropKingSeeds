var imagemin = require("imagemin"), // The imagemin module.
  webp = require("imagemin-webp"), // imagemin's WebP plugin.
  outputFolder = "./img", // Output folder
  PNGImages = "./static/img/png*.png", // PNG images
  JPEGImages = "./static/img/jpg*.jpg"; // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [
    webp({
      lossless: true // Losslessly encode images
    })
  ]
});
console.log("here");

imagemin([JPEGImages], outputFolder, {
  plugins: [
    webp({
      quality: 90 // Quality setting from 0 to 100
    })
  ]
});
