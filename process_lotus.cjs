const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('public/lotus_icon.png')
    .pipe(new PNG({ filterType: 4 }))
    .on('parsed', function () {
        let minX = this.width, minY = this.height, maxX = 0, maxY = 0;

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let idx = (this.width * y + x) << 2;
                let r = this.data[idx];
                let g = this.data[idx + 1];
                let b = this.data[idx + 2];

                // Strictly kill pure white background, preserve inner gold/red colors!
                if (r > 252 && g > 252 && b > 252) {
                    this.data[idx + 3] = 0;
                }
                else if (r > 245 && g > 245 && b > 245) {
                    // Anti-aliasing fringe for pure white
                    this.data[idx + 3] = 120;
                }
                else {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }
        }

        const croppedWidth = maxX - minX;
        const croppedHeight = maxY - minY;

        // Create massive padding multiplier to heavily space out the lotus tiles
        // Multiplier of 1.8 means the flower occupies roughly 55% of the tile footprint
        const PADDED_SIZE = Math.floor(Math.max(croppedWidth, croppedHeight) * 2.2);

        const dstPng = new PNG({ width: PADDED_SIZE, height: PADDED_SIZE });

        // Offset to center the flower inside the massively padded tile
        const offsetX = Math.floor((PADDED_SIZE - croppedWidth) / 2);
        const offsetY = Math.floor((PADDED_SIZE - croppedHeight) / 2);

        for (let y = 0; y < croppedHeight; y++) {
            for (let x = 0; x < croppedWidth; x++) {
                let srcX = minX + x;
                let srcY = minY + y;
                let srcIdx = (this.width * srcY + srcX) << 2;
                let dstIdx = (PADDED_SIZE * (y + offsetY) + (x + offsetX)) << 2;

                // Only transfer if it wasn't made completely transparent
                if (this.data[srcIdx + 3] > 0) {
                    // To make it darker as requested ("also make it dark it looks more professional")
                    // We can mathematically compress the RGB values to darken the logo natively!
                    // Multiplier 0.7 = 30% darker
                    dstPng.data[dstIdx] = Math.floor(this.data[srcIdx] * 0.7);
                    dstPng.data[dstIdx + 1] = Math.floor(this.data[srcIdx + 1] * 0.7);
                    dstPng.data[dstIdx + 2] = Math.floor(this.data[srcIdx + 2] * 0.7);
                    dstPng.data[dstIdx + 3] = this.data[srcIdx + 3]; // Preserve alpha
                }
            }
        }

        dstPng.pack().pipe(fs.createWriteStream('public/lotus_icon_transparent.png'))
            .on('finish', () => console.log('Successfully processed spaced dark transparency'));
    });
