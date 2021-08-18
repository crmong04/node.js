const http = require('http');

http.createServer((req,res) => {
    res.write('<h1>Hello Node!<h1>');
    res.end('<p>Hello Server!</p>');
});
http.Server.losten(8080);
http.Server.on('listening',() => {
    console.log('8080번 포트에서 서버 대기 중 입니다');
});
http.Server.on('error',(error) => {
    console.error(error);ss
});



//listen 메서드에 콜백 함수를 넣는 대신 서버에 listening이벤트 리스너를 붙여도
//된다 error 이벤트 리스너 추가

