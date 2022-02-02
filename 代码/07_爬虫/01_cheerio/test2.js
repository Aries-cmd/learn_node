const axios = require("axios")

let httpUrl = "https://fabiaoqing.com/bqb/lists/page/1.html"
let options = {
  proxy: {
    host: "61.142.72.150",
    port: 33235
  }
}

axios.get(httpUrl, options)
  .then(res => {
    console.log(res.data);
  })