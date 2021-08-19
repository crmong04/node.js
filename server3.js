const http = require('http');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k,...vs]) => [k, vs.join('=')])
        .reduce((acc,[k,v])=>{
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
    },{});

http.createServer((req,res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url,cookies);
    res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
    res.end('Hello Cookie');
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다');
    });

//parseCookies 함수 만듦
// 쿠키는 name = zerocho;year=1994처럼 문자열 형식으로 오므로 이를{name:'zerocho',year:'1994'}와 같이 객체로 바꾸는 함수
//createServer메서드의 콜백에서는 제일 먼저 req 객체에 담겨 있는 쿠키를 분석한다
//쿠키는 req.headers.cookie에 들어 있다.
//req.headers는 요청에 헤더를 의미한다
//응답의 헤더에 쿠키를 기록해야 하므로 res.writeHead메서들르 사용하였다
//첫 번째 인자로 200이라는 상태 코드를 넣었다 200은 성공이라는 의미이다
//Set-cookie는 브라우저한테 다음과 같은 값의 쿠키를 저장하라는 의미
//실제로 응답을 받은 브라우저는 mycookie=test라는 쿠키를 저장한다
//req.ur과 cookies 변수에 대한 정보를 로깅하도록 했다
//req.url은 주소의 path와 search 부분을 알려준다
