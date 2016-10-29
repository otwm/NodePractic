const fs = require('fs');
const path = require('path');

module.exports = function (folderPath, getExt, cb) {
    fs.readdir(folderPath, (err,fileNames) =>{
        if(err){cb(err)}
        fileNames.filter(fileName=>path.extname(fileName) == '.' + extension)
            .forEach(val => console.log(val));
    });
};