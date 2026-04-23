const Jimp = require('jimp');

async function removeWhiteBg() {
    try {
        const inputPath = 'c:\\Users\\adrad\\OneDrive\\Desktop\\mezi-health-pkg\\.png\\medcy_logo_high_res.png';
        const outputPath = 'c:\\Users\\adrad\\OneDrive\\Desktop\\mezi-health-pkg\\public\\medcy_logo.png';

        console.log('Loading image...');
        const image = await Jimp.read(inputPath);

        console.log('Processing pixels...');
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // If pixel is close to white, make it transparent
            if (r > 230 && g > 230 && b > 230) {
                this.bitmap.data[idx + 3] = 0;
            }
        });

        console.log('Saving image...');
        await image.writeAsync(outputPath);
        console.log('Successfully removed background and saved to public/medcy_logo.png');
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

removeWhiteBg();
