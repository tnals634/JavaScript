//화살표함수
//ES6 신 문법
function add(x, y) {
    return x + y;
}

//1-1. 기본적인 화살표 함수
//기본 함수가 익숙해진 뒤에 사용했으면 함
let arrowFunc01 = (x, y) => {
    return x + y;
}

//1-2. 한 줄로
//로직이 한줄이고 return 문일때
let arrowFunc02 = (x, y) => x + y;


//
function testFunc(x){
    return x;
}

//화살표 함수로
let arrowFunc03 = (x) => x;