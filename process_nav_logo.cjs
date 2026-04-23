const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('.png/medcy_logo_high_res.png')
    .pipe(new PNG({ filterType: 4 }))
    .on('parsed', function () {
        let minX = this.width, minY = this.height, maxX = 0, maxY = 0;

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let idx = (this.width * y + x) << 2;
                let r = this.data[idx];
                let g = this.data[idx + 1];
                let b = this.data[idx + 2];

                // Remove pure white and near-white background only
                if (r > 248 && g > 248 && b > 248) {
                    this.data[idx + 3] = 0;
                } else if (r > 240 && g > 240 && b > 240) {
                    // Soft anti-alias edge
                    let dist = Math.min(r, g, b);
                    this.data[idx + 3] = Math.floor((255 - dist) * 8);
                } else {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }
        }

        const PADDING = 6;
        minX = Math.max(0, minX - PADDING);
        minY = Math.max(0, minY - PADDING);
        maxX = Math.min(this.width - 1, maxX + PADDING);
        maxY = Math.min(this.height - 1, maxY + PADDING);

        const croppedWidth = maxX - minX;
        const croppedHeight = maxY - minY;

        const dstPng = new PNG({ width: croppedWidth, height: croppedHeight });

        for (let y = 0; y < croppedHeight; y++) {
            for (let x = 0; x < croppedWidth; x++) {
                let srcIdx = (this.width * (minY + y) + (minX + x)) << 2;
                let dstIdx = (croppedWidth * y + x) << 2;
                dstPng.data[dstIdx] = this.data[srcIdx];
                dstPng.data[dstIdx + 1] = this.data[srcIdx + 1];
                dstPng.data[dstIdx + 2] = this.data[srcIdx + 2];
                dstPng.data[dstIdx + 3] = this.data[srcIdx + 3];
            }
        }

        dstPng.pack().pipe(fs.createWriteStream('public/nav_logo_transparent.png'))
            .on('finish', () => console.log(`Done: ${croppedWidth}x${croppedHeight}`));
    });
