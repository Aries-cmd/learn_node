// 获取 html 文档内容，内容获取跟 jquery 一样
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

let httpUrl = "https://www.pkdoutu.com/article/list/?page=1";
axios.get(httpUrl).then((res) => {
  // console.log(res.data);
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
      console.log("成功创建目录：" + title);
    });

    console.log(title);
    parsePage(href, title)
  });
});

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
    let ws = fs.createWriteStream(imgPath)
    axios.get(imgUrl, {responseType: "stream"}).then(res => {
      res.data.pipe(ws)
    })
  });
}
