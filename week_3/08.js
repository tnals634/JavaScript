//bind 에서도 
// -> this 를 바인딩 하는 메서드
//call, apply와는 좀 다르다. 즉시 호출하지 않는다.
//해당하는 함수를 this 바인딩해서 새로운 함수를 return 한다.
//그 return한 것을 변수가 다시 받아서 그다음에 사용하는것이다.

// 목적
// 1. 함수에 this를 '미리' 적용한다.
// 2. 부분 적용 함수

//1번 예시
var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};

func(1, 2, 3, 4); //global 객체

//이런걸 방지하기위해 bind를 하는 거다.

//함수에 this를 미리 적용
var bindFunc1 = func.bind({x: 1});
bindFunc1(5,6,7,8);

// 2번 예시
var bindFunc2 = func.bind({x:1}, 4, 5);
// bindFunc2(6,7);
bindFunc2(10, 11);

//name 프로퍼티
// 어느 함수든 갖고 있다.
//거기에 'bound'라는 접두어가 붙어있다.
//그래서 추적하기가 매우 쉽다.

console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);


//상위 컨텍스트의 this를 내부함수나 콜백 함수에 전달하는 방법
//call을 쓰는 방법
// var obj = {
//     outer: function () {
//         console.log(this); //obj
//         var innerFunc = function () {
//             console.log(this);
//         };

//         //call을 이용해서 즉시 실행하면서 this를 넘겨줌
//         innerFunc.call(this); //obj
//     }
// };
// obj.outer();


//bind 이용 (이방법을 더 많이 쓰임)
// var obj = {
//     outer: function () {
//         console.log(this);
//         var innerFunc = function () {
//             console.log(this);
//         }.bind(this); //innerFunc에 this를 결합한 새로운 함수를 할당
//         innerFunc();
//     }
// };
// obj.outer();


//화살표 함수 이용
var obj = {
    outer: function () {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    }
};

obj.outer();