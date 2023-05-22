// for, while => ~동안 : 반복문

// for (let i = 0; i < 20; i++) {
//     console.log(i);
// }

//배열과 for문은 짝꿍이다.
// const arr = ["one", "two", "three", "four", "five"];
// for(let i = 0; i < arr.length; i++){
//     console.log(i);
//     console.log(arr[i]);
// }

//0부터 10까지의 수 중, 2의 배수만 출력

// for(let i = 0; i<= 10; i++){
//     if(i>=2){
//         if((i % 2) === 0){
//             console.log(i);
//         }
//     }
// }

//for ~ in문
//객체의 속성을 출력하는 문법
let person = {
    name:'john',
    age:30,
    gender:"male"
};

for(let key in person){
    console.log(key + ": "+person[key]);
}