/* eslint-disable */
const fs = require('fs');
const path = require('path');
const en = require('./src/i18n/lang/en.js');
const onlineEn = require('./src/i18n/lang/online.js');
const existKeys = Object.keys(Object.assign(en, onlineEn));
let filePath =  path.resolve(__dirname, 'src');
console.log('filePath', filePath);
console.log('existKeys', existKeys);
// scanFolder('filePath');

const strings = [];
function processFile(file) {
  const fileContent = fs.readFileSync(file, 'utf-8');
  const matches = fileContent.match(/(?<=\$t\(').*?(?='\))/g);

  if (matches) {
    strings.push(...matches);
  }
}

function processDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      processFile(filePath);
    } else if (stat.isDirectory()) {
      processDirectory(filePath);
    }
  });
}

function uniqResult(arr){
  return arr.filter(item=>{
    return !existKeys.includes(item)
  })
}

// processDirectory(filePath);
// const result = [...new Set(uniqResult(strings))]
// fs.writeFileSync('result.txt', result.join('\n'));
// console.log(`${result.length} strings have been written to result.txt.`);

function getUniqResult(){
  const content = fs.readFileSync('result.txt', 'utf-8');
  const strings = content.split('\n');
  const uniqueStrings = [...new Set(strings)];
  console.log(uniqueStrings);
  
fs.writeFileSync('uniqResult.txt', uniqueStrings.join('\n'));
  console.log(`${uniqueStrings.length} unique strings have been written to uniqResult.txt.`)
}

getUniqResult()

// function getString(str){
//   const reg = /(?<=\$t\(').*?(?='\))/g;
//   const result = str.match(reg);
//   if (result) {
//     return result;
//   }
// }
