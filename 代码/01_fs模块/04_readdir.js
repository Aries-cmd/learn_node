const fs = require("fs")

fs.readdir("./测试", (err, files) => {
  if (err) {
    console.log(err);
  }

  console.log(files);  // [ 'aaa.txt', 'bbb.txt' ]
})