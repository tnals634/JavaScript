// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

//1. 암시적(자동으로 바뀜)
//1-1. 문자열
let result1 = 1+"2";
// console.log(result1);
// console.log(typeof result1);

let result2 = "1" + true;
// console.log(result2);
// console.log(typeof result2);

//{}, null, undefined + "1" => 문자열

//1-2. 숫자
let result3 = 1 - "2";
// console.log(result3);
// console.log(typeof result3);

let result4 = "2" * "4";
// console.log(result4);
// console.log(typeof result4);

//2. 명시적 형 변환
//2-1. Boolean
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log("--------------");
// console.log(Boolean("false"));
// console.log(Boolean({}));


//2-2. 문자열
// let result5 = String(123);
// console.log( result5);


// let result6 = String(true);
// console.log( result6);


// let result7 = String(false);
// console.log( result7);


// let result8 = String(null);
// console.log( result8);


// let result9 = String(undefined);
// console.log(result9);

//2-3. Number
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);