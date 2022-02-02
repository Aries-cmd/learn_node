const os = require("os")

// 获取 cpu 相关信息
console.log(os.cpus());

// 获取内存相关信息(字节)
console.log(os.totalmem());  // 8434081792

// 获取空闲的内存
console.log(os.freemem());  // 2255704064

// 获取当前操作系统的架构
console.log(os.arch());  // x64

// 获取当前主机名
console.log(os.homedir());  // C:\Users\stran

// 查看当前系统的平台
console.log(os.platform());  // win32