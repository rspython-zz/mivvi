var fs = require('fs');

function filePathExists(filePath) {
    return new Promise((resolve, reject) => {
        fs.stat(filePath, (err, stats) => {
            if (err && err.code === 'ENOENT') {
                return resolve(false);
            } else if (err) {
                return reject(err);
            }
            if (stats.isFile() || stats.isDirectory()) {
                return resolve(true);
            }
        });
    });
}

if (filePathExists('./gulp_tasks')) {
    require('require-dir')('./gulp_tasks', {
        recurse: true
    });
}