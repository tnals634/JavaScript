// 단축 속성명 : property shorthand
//정말 많이 쓰임
const name = "ab";
const newAge = "30";
const age = "20";

//key - value
const obj = {
    name, //스펠링이 같은 경우 과감히 생략가능
    age: newAge //스펠링이 다른 경우 생략x
}

//단축 속성명을 쓴 경우
const obj2 = {name, age};

//전개 구문 = spread operator
//destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나
// let arr = [1,2,3];
// console.log(arr);
// console.log(...arr);

// let newArr = [...arr,4];
// console.log(arr);
// console.log(newArr);

//객체에서도 마찬가지이다.
// let user = {
//     name:'abc',
//     age: 30,
// };

// let user2 = {...user, birthday:"d"};
// console.log(user);
// console.log(user2);

//나머지 매개변수(rest parameter)
// function exampleFunc(a,b,c, ...args) {
//     console.log(a,b,c);
//     console.log(...args);
// }

// exampleFunc(1,2,3,4,5,6,7);

//템플릿 리터럴(template literal)
// var value = 3*3;
// console.log(`hello world ${3+3}`);
// console.log(`hello world ${value}`);

//그리고 멀티라인이 가능하다.
// console.log(`
//     hello,
//         my name is JavaScript!!

//         nice to meet you!
// `);
