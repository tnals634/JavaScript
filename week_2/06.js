// 배열의 요소로 함수를 할당


const myArr = [
    //함수가 array 형태로 들어감
    //이 두개를 요소로 갖는 배열
    function (a,b) {
        return a + b;
    }, function (a,b) {
        return a - b;
    },
];

console.log(myArr[0](1,3));
console.log(myArr[1](10,7));