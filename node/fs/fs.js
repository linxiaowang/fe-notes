// 导入文件模块系统
const fs = require('fs')

// 读取文件
// 注意：读取到的文件均为buffer类型
function readFile(){
  // 异步
  fs.readFile('./file/read.txt', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(data.toString())
  })

  //同步
  const data = fs.readFileSync('./file/read.txt')
  console.log(data.toString());
}

// 打开文件
function openFile(){
  // 异步
  fs.open('./file/read.txt', 'r', (err, fd) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(fd)
  })

  // 同步
  // const fd = fs.openSync('./file/read.txt', 'r')
  // console.log(fd)
}

// openFile()

// 获取文件信息
// stats.isFile()	如果是文件返回 true，否则返回 false。
// stats.isDirectory()	如果是目录返回 true，否则返回 false。
// stats.isBlockDevice()	如果是 块设备 返回 true，否则返回 false。
// stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
// stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
// stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
// stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
function getFileStat(){
  // 异步
  fs.stat('./file/read.txt', (err, stats) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(stats)
  })

  // 同步
  const stats = fs.statSync('./file/read.txt')
  console.log(stats)
}

// getFileStat()

// 写文件-若无文件则会自动创建文件
function writeFile(){
  // 异步
  fs.writeFile('./file/write.txt', 'hello world', (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('写入成功')
  })

  // 同步
  // fs.writeFileSync('./file/write.txt', 'hello world')
}
writeFile()
