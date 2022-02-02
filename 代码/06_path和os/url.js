const url = require("url")

let str = "https://www.bilibili.com/video/BV1i7411G7kW?p=9"

// 获取网络路径相关信息
console.log(url.parse(str));
/**
 * Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.bilibili.com',
  port: null,
  hostname: 'www.bilibili.com',
  hash: null,
  search: '?p=9',
  query: 'p=9',
  pathname: '/video/BV1i7411G7kW',
  path: '/video/BV1i7411G7kW?p=9',
  href: 'https://www.bilibili.com/video/BV1i7411G7kW?p=9'
}
 */


// 拼接网络路径
let str2 = "https://www.bing.com"
let str3 = "/cas/brb?search=周杰伦"
console.log(url.resolve(str2, str3));  // https://www.bing.com/cas/brb?search=周杰伦