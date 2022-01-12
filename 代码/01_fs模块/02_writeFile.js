const fs = require("fs");

// 基本写法
// fs.writeFile("./aaa.txt", "天青色等烟雨，而我在等你", err => {
//   if (err) {
//     console.log(err)
//   }

//   console.log("写入成功");
// })

// promise
// var p1 = new Promise((resolve, reject) => {
//   fs.writeFile("./aaa.txt", "最美的不是下雨天，时曾与你躲过雨的屋檐", err => {
//     if (err) {
//       reject(err)
//     }
  
//     resolve("写入成功")
//   })
// })

// p1.then(res => {
//   console.log(res);
// })


// 函数封装
// function writeFile(path, info) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(path, info, err => {
//       if (err) {
//         reject(err)
//       }

//       resolve("写入成功")
//     })
//   })
// }

// var p2 = writeFile("./aaa.txt", "这是一个不能说的秘密")
// p2.then(res => {
//   console.log(res);
// })


// async 函数
function writeFile(path, info) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, info, {flag: "a+"}, err => {
      if (err) {
        reject(err)
      }

      resolve("写入成功")
    })
  })
}

// async function writeList() {
//   await writeFile("./aaa.txt", "今天吃烧烤\n")
//   await writeFile("./aaa.txt", "今天吃烧烤\n")
//   await writeFile("./aaa.txt", "今天吃烧烤\n")
//   await writeFile("./aaa.txt", "今天吃烧烤\n")
// }
// writeList()


// 其他文件需使用
module.exports = {
  writeFile
} 