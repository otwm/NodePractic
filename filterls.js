const fs = require('fs');
const path = require('path');

const folderPath = process.argv[2];
const extension = process.argv[3];

fs.readdir(folderPath, (err,fileNames) =>{
    fileNames.filter(fileName=>path.extname(fileName) == '.' + extension)
        .forEach(val => console.log(val));
});