//암호화를 적용하는 만큼, 인증해줄 수 있는 기관도 필요 , 인증서는 기관에서 발급이나 구입, 아래 코드는 인증서가 있는경우
const https = require('https');
const fs = require('fs');

https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
},(req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(443, () => {
    console.log('443포트에서 서버 대기 중입니다');
});

//createServer 메서드가 인자를 두 개 받습니다 두번째 인자는 http모듈과 같이 서버 로직이고 첫번쨰 인자는 인증서에 관련된 옵션 객체이다