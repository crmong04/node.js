const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    fs.readFile('./server2.html',(err, data) => {
        if(err){
            throw err;
        }
        res.end(data);
    });
}).listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
});

//요청이 들어오면 먼저 fs 모듈로 HTML 파일을 읽는다. data 변수에 자장된 버퍼를 그대로 클라이언트에 보내주면 된다