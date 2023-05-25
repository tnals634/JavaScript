//무슨 제어권을 받는가 2번째
//인자에 대한 제어권을 받는다.
//Map 함수
//사람은 앞에 index이고 뒤가 currentvalue여도,
//컴퓨터는 정해져있기 때문에 첫번째는 currentvalue자리,
//두번째는 index로 이해한다.
var newArr = [10, 20, 30].map(function(index, currentVal) {
    console.log(index, currentVal);
    return currentVal + 5;
});

//결과는 뭐가 될까?
// console.log(newArr); //undefined
//map은 return값을 무조건 필요, 없으면 undefined할당

// console.log(newArr); //[15, 25, 35]
console.log(newArr); //[5, 6, 7] index에 더해진거 같다.