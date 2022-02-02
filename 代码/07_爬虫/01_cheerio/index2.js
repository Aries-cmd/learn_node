// 获取 html 文档内容，内容获取跟 jquery 一样
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

let httpUrl = "https://www.pkdoutu.com/article/list/?page=1";


// 获取页面总数
async function getNum() {
  let res = await axios.get(httpUrl)
  let $ = cheerio.load(res.data)

  let allNum = $(".pagination li:nth-last-child(2)>a").text()

  // console.log(allNum);

  return allNum
}
getNum()


// 
async function spider() {
  // 获取页面总数
  let allPageNum = await getNum()


  /**
   * 由于开了定时器之后请求太多的数据也会请求不到图片，所以只能自己手动设置一下一次性请求多少页面的数据
   * 
   */
  // for (var i = 1; i <= 3; i++) {
  //   fun(i)
  // }

  // function fun(i) {
  //    return setTimeout(() => {
  //     getListPage(i)
  //     // console.log(i);
  //   }, 5000);
  // }


  // 改良
  /**
   * 还是会有问题，
   * 大致有两个原因：
   *    服务器宽带不够
   *    自己主机的网络和性能有些拉跨，导致丢包
   */
  var i = 0
  var timer = setInterval(() => {
    i += 1
    getListPage(i)
    

    if (i >= 10) {
      clearInterval(timer)
    }
  }, 10000);
  
}


async function getListPage(pageNum) {
  let httpUrl = "https://www.pkdoutu.com/article/list/?page=" + pageNum;
  let res = await axios.get(httpUrl)
  let $ = cheerio.load(res.data);

  $("#home .col-sm-9 a.list-group-item").each((i, el) => {
    // console.log($(el).attr("href"));
    let href = $(el).attr("href");

    // parsePage(href)
    let title = $(el).find(".random_title").text(); // find() 用来返回匹配到的后代元素

    // 用正则来分割想要的字符title
    let reg = /(.*?)\d/gis;
    title = reg.exec(title)[1];

    // 根据不同的 title 创建不同的文件夹
    fs.mkdir('./img/' + title, (err) => {
      if (err) {
        console.log(err);
      }
      // console.log("成功创建目录：" + title);
    });

    // console.log(title);
    parsePage(href, title)
  });
}



// axios.get(httpUrl).then((res) => {
//   // console.log(res.data);
//   let $ = cheerio.load(res.data);
 
// });

async function parsePage(url, title) {
  let res = await axios.get(url);
  let $ = cheerio.load(res.data);

  $(".artile_des img").each((i, el) => {
    // console.log($(el).attr("src"));
    let imgUrl = $(el).attr("src")  // 获取图片地址
    let extname = path.extname(imgUrl)  // 获取后缀名

    // 图片写入的路径和名字
    let imgPath = `img/${title}/${title}-${i}${extname}`
    // 创建写入流
    let ws = fs.createWriteStream(imgPath, {flags: "a+"})
    axios.get(imgUrl, {responseType: "stream"}).then(res => {
      res.data.pipe(ws)
    })
  });
}


spider()