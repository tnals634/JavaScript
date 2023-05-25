// var obj1 = {
//     outer: function () {
//         console.log(this); //(1) outer

//         //AS-IS (기존)
//         var innerFunc1 = function() {
//             console.log(this); // (2) 전역객체
//         };
//         innerFunc1();

//         //TO-BE (이후)
//         //흐름을 유지하는 this를 찍는것같은
//         //효과가 있다.
//         var self = this;
//         var innerFunc2 = function () {
//             console.log(self); // (3) outer
//         };
//         innerFunc2();
//     }
// };

// //메서드 호출 부분
// obj1.outer();


//화살표 함수 사용
// var obj = {
//     outer: function () {
//         console.log(this); // (1) obj

//         //화살표 함수이기 때문에 this바인딩 과정 자체가 없기 때문에
//         //this는 outer를 바라본다.
//         var innerFunc = () => {
//             console.log(this); // (2) obj
//         };
//         innerFunc();
//     }
// };

// obj.outer();


// 콜백 함수
// 별도 지정 없음 : 전역 객체
// setTimeout(function () { console.log(this) }, 300);

// //별도 지정 없음 : 전역 객체
// [1, 2, 3, 4, 5].forEach(function(x) {
//     console.log(this, x);
// });

// //addListener 안에서의 this는 항상 호출한 주체의 element를 return하도록 설계되었음
// //따라서 this는 button을 의미함.
// document.body.innerHTML += '<button id="a">클릭</button>';
// document.body.querySelector('#a').addEventListener('click', function(e) {
//     console.log(this, e);
// });

//생성자 함수

var Cat = function (name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
};

var choco = new Cat('초코',7);//this:choco
var nabi = new Cat('나비',5); //this:nabi