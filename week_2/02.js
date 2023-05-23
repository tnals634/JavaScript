//구조분해할당 : destructuring(de + structure + ing)
//de = not
//structure = 구조
//구조를 찢어버려서 할당한다.
//배열, 객체의 속성

// 1. 배열의 경우
// let [val1, val2] = [1,"new"];
// console.log("1",val1);
// console.log("2",val2);

// let arr = ['val1', 'val2', 'val3'];
//이렇게 변수가 하나 더 있는경우 자바스크립트가 자동으로
//없다는것을 인식해 undefined를 넣어준다.

//d의 값이 undefined일 경우 4라는 값을 넣어준다.
//그렇지 않고 값이 있을 경우엔 4가 아닌 그값을 넣어준다.
// let [a, b, c, d = 4] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// 2. 객체인 경우
// let user = {
//     name: "abc",
//     age: 30
// };

// let {name,age} = user;
// console.log("name =>", name); //string
// console.log("age =>",age); //number

//새로운 이름으로 할당하는 방법
// let user = {
//         name: "abc",
//         age: 30,
//         birthday: "9월10일"
//     };

//name이라는 값을 가져올건데 newName이라는 변수로 가져올꺼다.
// let {
//     name: newName,
//     age: newAge
// } = user;
//그래서 console.log에 찍을땐 아래와 같이 작성해야한다.
// console.log("newName => ",newName);
// console.log("newAge => ",newAge);

// let {name, age, birthday = "5월7일"} = user;
// console.log(name);
// console.log(age);
// console.log(birthday);