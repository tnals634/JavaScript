// 런타임
// run + time = 코드가 돌아가는 그 환경
// 1. 노드
// 2. 브라우저

//메서드 vs 함수

//case1 : 함수
//호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미
// var func = function (x) {
//     console.log(this,x);
// };

// func(1); //object[global] {...} 1

// //case2 : 메서드
// //호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미
// //obj는 곧 {method: f}를 의미
// var obj = {
//     method: func,
// };

// obj.method(2); //{method:f}2


//this에는 호출을 누가 했는지에 대한 정보가 담긴다.
// var obj = {
//     methodA: function() { console.log(this)},
//     inner: {
//         methodB: function() {console.log(this)},
//     }
// };

// obj.methodA();              //this === obj
// obj['methodA']();              //this === obj

// obj.inner.methodB();        //this === obj.inner
// obj.inner['methodB']();     //this === obj.inner
// obj['inner'].methodB();     //this === obj.inner
// obj['inner']['methodB']();  //this === obj.inner

var obj1 = {
    outer: function() {
        console.log(this); //(1)
        var innerFunc = function () {
            console.log(this); //(2), (3)
        };
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc,
        };
        obj2.innerMethod();
    },
};
obj1.outer();