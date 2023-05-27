//setTimeout 은 내부에서 콜백 함수를 호출할 때,
//call 메서드의 첫번째 인자에 전역객체를 넘긴다.
//따라서 콜백 함수 내부에서의 this가 전역객체를 가리킨다.
// setTimeout(function () { console.log(this);},300); //global

//forEach도 마찬가지로 콜백 뒷 부분에 this를 명시해주지 않으면
//전역객체를 넘긴다. 만약 명시한다면 해당 객체를 넘긴다.
// [1,2,3,4].forEach(function(x) {
//     console.log(this); //global
// });
[1,2,3,4].forEach(function(x) {
    console.log(this); //{x:1}을 4번 출력
},{x:1});

//addEventListener은 내부에서 콜백 함수를 호출할 때,
//call 메서드의 첫번째 인자에 AEL 메서드의 this를 
//그대로 넘겨주도록 정의돼 있다.(상속)
// document.body.innerHTML += '<button id="a">click</button>';
// document.body.querySelector('#a').addEventListener('click',function(e){
//     console.log(this,e);
// });


