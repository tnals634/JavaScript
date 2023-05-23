//일급객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다.
// 특징
// 함수가 마치 값으로 취급한다.
// 함수가 나중에 사용될 수 있도록 조치가 되어있다.
// const sayHello = function () {
//     console.log("hello");
// }

// 2. 함수를 인자로 다른 함수에 전달 할 수가 있다.
// 2-1. 콜백함수 : 매개변수로서 쓰이는 함수
// 2-2. 고차함수 : 함수를 인자로 받거나 return하는 함수
// function callFunc (func) {
//     //매개변수로 받은 변수가 사실, 함수다.
//     func();
// }

// const sayHello = function () {
//     console.log("hello");
// };

// callFunc(sayHello);


// 3. 함수를 반환할 수 있다.
// function createAdder(num) {
//     return function (x) {
//         return x+num;
//     }
// }

// const addFive = createAdder(5);
//위의 코드를 해석해보면 아래와 같이 나온다.
// const addFive = createAdder(function (x) {
//     return x+5;
// });
// console.log(addFive(10));
//그리고 위 console을 해석해보면 아래와 같다.
// console.log(addFive(function (10) {
//         return 10+5;
//     }));

