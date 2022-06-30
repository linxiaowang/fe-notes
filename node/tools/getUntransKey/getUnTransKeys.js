const fs = require('fs');
const path = require('path');
const zh = require('./zh.js');
const existKeys = Object.keys(zh)
let filePath =  path.resolve(__dirname);

scanFolder(filePath);


function scanFolder(dirPath){
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.log(err);
          return;
        }
        if (stats.isFile()) {
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.log(err);
              return;
            }
            const result = getString(data);
            if (result) {
              printResult = result.filter(item => {
                return existKeys.indexOf(item) === -1;
              });
              fs.writeFile('result.txt', printResult, (err) => {
                if (err) {
                  console.log(err);
                  return;
                }
                console.log('写入成功');
              });
            }
              console.log(result);
          });
        } else {
          scanFolder(filePath);
        }
      });
    });
  });
}


function getString(str){
  const reg = /(?<=\$t\(').*?(?='\))/g;
  const result = str.match(reg);
  if (result) {
    return result;
  }
}
