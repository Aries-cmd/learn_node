// 1. 数组不能进行二进制数据的操作
// 2. js 数组不像 java、python 等语言效率高
// 3. buffer 内存空间开辟出固定大小的内存

var str = "hello world"
var buf = Buffer.from(str)

// 在呈现给我们看的时候会将二进制转换为十六进制给我们看
console.log(buf);  // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// 输出 buffer 的内容
console.log(buf.toString());  // hello world


// 开辟一个 空的 Buffer
let buf1 = Buffer.alloc(10)  // 占十位
console.log(buf1);  // <Buffer 00 00 00 00 00 00 00 00 00 00>

buf1[0] = 20  // <Buffer 14 00 00 00 00 00 00 00 00 00> 
console.log(buf1);