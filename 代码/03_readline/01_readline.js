// 导入 readline 包
const readline = require("readline")

// 实例化接口对象
let r1 = readline.createInterface({
  input: process.stdin,  // 输入
  output: process.stdout  // 输出
})

// 设置 r1，提问事件
r1.question("今晚吃啥？", (answer) => {
  console.log("答复：", answer);
  r1.close()
})

// 监听事件
r1.on("close", () => {
  process.exit(0)  // 结束进程
})