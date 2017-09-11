var express = require('express');
var app = express();

console.log('12345678')
console.log('abcdef')

app.listen(8888, ()=>{
    console.log('服务已启动，请访问：http://localhost:8888')
})