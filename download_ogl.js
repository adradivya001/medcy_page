const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = 'lib';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const file = fs.createWriteStream(path.join(dir, "ogl.js"));
https.get("https://esm.sh/ogl", function (response) {
    if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, function (newResponse) {
            newResponse.pipe(file);
        });
    } else {
        response.pipe(file);
    }
});
