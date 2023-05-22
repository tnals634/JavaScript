//조건부 실행
let x = 10;

// if (x > 0) {
//     console.log("x는 양수");
// }

// (x > 0) && console.log("x는 양수");

//or 조건(||)
//3항 연산자와 단축평가
let y; //undefined
let z = y || 20;//y가 존재하지않는경우 기본값으로 20세팅

console.log(z);