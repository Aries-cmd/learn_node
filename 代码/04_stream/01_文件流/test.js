const fs = require("fs")

fs.readFile("./a.mp4", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("文件读取成功");
    fs.writeFile("./b.mp4", data, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("文件写入成功");
      }
    })
  }
})