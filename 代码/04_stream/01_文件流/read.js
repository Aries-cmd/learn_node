const fs = require("fs")

// let rs = fs.createReadStream("./hello.txt", {flags: "r", encoding: "utf-8"})
let rs = fs.createReadStream("./1.1Python概述.mp4", {flags: "r"})
let ws = fs.createWriteStream("./a.mp4", {flags: "a+"})

rs.on("open", function () {
  console.log("读取的文件已打开");
})

rs.on("ready", function () {
  console.log("文件读取已准备状态");
})

rs.on("close", function () {
  console.log("读取的文件已关闭");
  ws.end()
})

// 每一批数据流入完成
rs.on("data", function (chunk) {
  console.log("单批数据流入：", chunk.length);
  console.log(chunk);

  ws.write(chunk,function () {
    console.log("单批输入流入完成");
  })
})