const fs = require("fs")

fs.unlink('./bbb.txt', (err) => {
  if (err) {
    console.log(err);
  }

  console.log("删除成功");
})  