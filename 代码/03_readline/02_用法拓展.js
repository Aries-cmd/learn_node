// 导入 readline 包
const readline = require("readline")
// 导入自己封装的 writeFile
const { writeFile } = require("../01_fs模块/02_writeFile.js")

// 实例化接口对象
let r1 = readline.createInterface({
  input: process.stdin,  // 输入
  output: process.stdout  // 输出
})

// 设置 r1，提问事件
function lcQuestion(title) {
  return new Promise((resolve, reject) => {
    r1.question(title, answer => {
      resolve(answer)
    })
  })
}

async function createPackage() {
  let name = await lcQuestion("您的包名名字：")
  let description = await lcQuestion("您的包名描述：")
  let author = await lcQuestion("您的包的作者是：")

  const content = `
  {
    "name": "${name}",
    "version": "1.0.0",
    "description": "${description}",
    "main": "01_readline.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "${author}",
    "license": "ISC"
  }
  
  `

  await writeFile('./package.json', content)

  r1.close()  // 结束 r1 进程
}
createPackage()

// 监听事件
r1.on("close", () => {
  process.exit(0)  // 结束进程
})