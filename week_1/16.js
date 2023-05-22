// 배열

//1. 생성
//1-1. 기본 생성
// let fruits = ["사과", "바나나", "키위"];

//1-2. 크기 지정
// let number = new Array(5);

// console.log(number.length);
// console.log(fruits.length);

//2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

//3. 배열 메소드
//3-1. push
// let fruits = ["사과","바나나"];
// console.log("1=>",fruits);

// fruits.push("오렌지");
// console.log("2=>",fruits);

//3-2. pop
// let fruits = ["사과","바나나"];
// console.log("1=>",fruits);
// fruits.pop();
// console.log("2=>",fruits);

//3-3. shift
// let fruits = ["사과","바나나"];
// console.log("1=>",fruits);
// fruits.shift();
// console.log("2=>",fruits);

//3-4. unshift
// let fruits = ["사과","바나나"];
// console.log("1=>",fruits);
// fruits.unshift("포도");
// console.log("2=>",fruits);

//3-5. splice
// let fruits = ["사과","바나나","키위"];
// //시작위치, 지울갯수, 바꾸려는 값
// fruits.splice(1,1,"포도");
// console.log(fruits);

//3-6. slice
// let fruits = ["사과","바나나","키위"];
//시작위치 , 마지막위치 -> 시작위치부터 마지막위치앞까지
//만 나와줘
// let sliceFruits = fruits.slice(1,2);
// console.log(sliceFruits);


// forEach, map, filter, find
// let numbers = [1, 2, 3, 4, 5];

//매개변수자리에 함수를 넣는것 -> 콜백 함수
// numbers.forEach(function(item){
//     console.log('item=>'+item);
// }); 

//2. map : 반드시 return문 필요
//기존에 있는 배열을 가공해서 새로운 배열을 생성하는 역할

// let newNumbers = numbers.map(function(item) {

//     return item * 2;
// });

// console.log(newNumbers);

//filter : map은 가공한 값이면 filter는 조건이 들어감
// let numbers = [4, 1, 5, 4, 2];

// let filteredNumbers = numbers.filter(function (item) {
//     return item !== 4;
// });

// console.log(filteredNumbers);

//find
//조건에 해당하는 값 제일 앞에서 1개만 나옴.
let numbers = [4, 1, 5, 4, 2];

let result = numbers.find(function (item) {
    return item > 3;
});

console.log(result);