const path = require("path")

let urlPath = "https://www.baidu.com/dq/4r/test.html"

// 获取路径信息的拓展名
console.log(path.extname(urlPath));  // .html

// 拼接路径
console.log(path.resolve(__dirname, "qianduan", "aaa.md"));  // G:\tools\nodejs（老陈）\代码\06_path\qianduan\aaa.md

// 获取当前路径，包含本身文件名
console.log(__filename);  // G:\tools\nodejs（老陈）\代码\06_path\main.js

// 解析路径信息
console.log(path.parse(__filename));  
/**
 * {
  root: 'G:\\',
  dir: 'G:\\tools\\nodejs（老陈）\\代码\\06_path',
  base: 'main.js',
  ext: '.js',
  name: 'main'
}
 */ 