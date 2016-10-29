const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, (err, buff) => {
    if (err) {
        return console.log(err);
    }
    console.log(buff.toString());
});