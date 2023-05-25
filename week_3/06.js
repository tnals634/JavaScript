// 명시적 this binding
// 상황별 규칙을 깨고 명시적으로 지정하는 방법
// call, apply, bind

// 1. call
// var func = function (a, b, c) {
//     console.log(this, a, b, c);
// };

//no binding
// func(1, 2, 3); //global을 바로보고 있다.


//명시적 binding
//전역객체를 바라보고 있는 시점에서 명시적 바인딩을 한것
// func.call({ x: 1 }, 1, 2, 3);
//          this  , 1, 2, 3


// //호출주체가 있는 경우

// var obj = {
//     a: 1,
//     method: function (x, y) {
//         console.log(this.a, x, y);
//     },
// };
// //method는 obj라는 주체가 있기 때문에 호출의 주체가 명확함
// //method 함수 안의 this는 항상 obj를 가리킴
// obj.method(2, 3);

// //이것도 깰 수 있다.
// obj.method.call({a: 4}, 5, 6);

//apply
//call과 비슷하다.
// var func = function (a, b, c) {
//     console.log(this, a, b, c);
// };

// //call과 다르게 뒤에 있는 매개변수를 [ ]로 묶어줘야한다.
// func.apply({x: 1}, [4, 5, 6]);


//call / apply
//객체에는 배열 메서드를 직접 적용X
//유사배열객체에는 call 또는 apply 메서드를 이용해
//배열 메서드를 차용할 수 있다.

//유사 배열
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

// Array.prototype.push.call(obj,'d');
// console.log(obj); // {0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4}

// var arr = Array.prototype.slice.call(obj);
// console.log(arr); //['a', 'b', 'c', 'd']

//객체 -> 배열
var arr = Array.from(obj);

//찍어보면 배열이 출력
console.log(arr);