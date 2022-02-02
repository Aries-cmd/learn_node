// 引入 events 模块
const events = require('events')

const fs = require("fs")

// 创建 eventEmitter 对象
let eventEmitter = new events.EventEmitter()

// 监听事件
eventEmitter.on("helloSuccess", function () {
  console.log("1吃宵夜");
})
eventEmitter.on("helloSuccess", function () {
  console.log("2唱K");
})
eventEmitter.on("helloSuccess", function () {
  console.log("3洗脚");
})
eventEmitter.on("helloSuccess", function () {
  console.log("4一条龙服务");
})

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    eventEmitter.emit("helloSuccess", data)
  }
})