// 주체는 콜백함수에게 무슨 제어권을 받는가
// 1. 호출 시점에 대한 제어권을 받는다.

//setInterval : 각 호출 사이에 고정된 시간이 지연되면 이를 반복적으로
// 호출하거나 코드 스니펫을 실행
var count = 0;
var cbFunc = function () {
    console.log(count);
    if(++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);