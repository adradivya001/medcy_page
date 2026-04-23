const fs = require('fs');
const PNG = require('pngjs').PNG;
fs.createReadStream('public/medcy_logo_transparent.png').pipe(new PNG()).on('parsed', function () {
    let size = this.height; // Extract square from left
    let dst = new PNG({ width: size, height: size });
    this.bitblt(dst, 0, 0, size, size, 0, 0);
    dst.pack().pipe(fs.createWriteStream('public/medcy_icon.png')).on('finish', () => console.log('Crop complete'));
});
