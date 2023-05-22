// 연산자( + - * / %)

// 1. + 
// console.log(1+1);
// console.log(1+"1");

// // 2. -
// console.log(1-"2");
// console.log(1-1);

// // 3. *
// console.log(2*3);
// console.log("2"*3);

// // 4. /
// console.log(4/2);
// console.log("4"/2);

// // 5. / vs %
// console.log(5/2) // 2.5
// console.log(5%2) // 1


//6. 할당 연산자 (assignment)
//6-1. 등호 연산자 (=)
// let x = 10;
// console.log(x);

//6-2. 더하기 등호 연산자 (+=)
// x += 5;
// console.log(x);

//6-3. 빼기 등호 연산자 (-=)
// x -= 5;
// console.log(x);

//6-4. 곱하기 등호 연산자 (*=)
// let a = 10;
// a *= 2;
// console.log(a);


//7. 비교 연산자 (---> true 또는 false 반환)
//7-1. 일치 연산자(===)
//타입까지 일치해야 true 반환

// console.log(2 === 2); //true
// console.log(2 === "2"); //false

//7-2. 불일치 연산자 (!==)
//타입까지 일치해야 false를 반환

// console.log(2 !== 2); //false
// console.log("2" !== 2); // true

//7-3. 작다 연산자 (<)
// console.log(2 < 3); // true
// console.log(2 <= 3); // true
// console.log(3 <= 3); // true


//8. 논리 연산자
//8-1. 논리곱 연산자 : 모두 true일 때 true 반환
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

//8-2. 논리합 연산자 : 두값 중 하나라도 true면 true반환
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//8-3. 논리부정 연산자 : 값을 반대로 바꿈
// console.log(!true);
// let a = true;
// console.log(!a);


//3항 연산자(중요!)
//조건에 따라 값을 선택
// let x = 10;
// let result = (x > 5) ? "크다" : "작다";
// console.log(result);


//타입 연산자(typeof)
console.log(typeof "5");