const cheerio = require("cheerio")
const axios = require("axios")
const fs = require("fs")
const path = require('path')

axios.get("https://fabiaoqing.com/bqb/detail/id/54763.html")
  .then(res => {
    // console.log(res.data);

    let $ = cheerio.load(res.data)

    $(".column>.segment>h1.header").each((i, el) => {
      // console.log($(el).text());
      let title = $(el).text()
      fs.mkdir("./images/" + title, err => {
        if (err) {
          console.log(err);
        }
        console.log("目录写入成功");
      })
    })

    $(".swiper-wrapper>.swiper-slide>a").each((i, el) => {
      // console.log($(el).attr("title"));
      let imgUrl = $(el).find("img").attr("data-original")
      console.log(imgUrl);

      let extname = path.extname(imgUrl)

      let ws = fs.createWriteStream(`images/金钱豹头像表情包/${Date.now()}${extname}`)

      axios.get(imgUrl, {responseType: "stream"}).then(res => {
        res.data.pipe(ws)
        console.log("成功写入图片：" + imgUrl);
      })
    })
  })