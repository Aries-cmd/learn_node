const fs = require("fs");

// promise
const p1 = new Promise((resolve, reject) => {
  fs.readFile("./aaa.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  })
})

p1.then(res => {
  console.log(res);
})



// 函数封装
function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

const p2 = readFile("./aaa.txt")
p2.then(res => {
  console.log(res);
})  