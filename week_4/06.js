//이 object는 2가지의 속성을 가진다.
//1.vals라는 배열을 가졌고,
//2.logValues라는 함수를 가졌다.
var obj = {
    vals: [1, 2, 3],
    logValues: function (v, i) {
        console.log(">>> test start");
        if(this === global){
            console.log("this가 global, 원하지않는 결과");
        }else {
            console.log(this,v,i);
        }
        console.log(">>> test ends");
    },
};

//method로서 호출
// obj.logValues(1,2);

//콜백 함수로 들어가보자.
//forEach, map, filter
//함수를 매개변수로 넣는다는건 함수 그자체를 넣어야하기때문에
//아래와 같이 넣으면 함수 자체가 아닌 함수 결과를 넣는거다.
// [4, 5, 6].forEach(obj.logValues(1,2));

//메서드의 형태처럼 보이나 함수 자체를 넣은거다.
[4, 5, 6].forEach(obj.logValues);