// function Person(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }

// function Student(name, gender, school) {
//     Person.call(this, name, gender);
//     this.school = school;
// }

// function Employee(name, gender, company) {
//     Person.call(this, name, gender);
//     this.company = company;
// }

// var kd = new Student('길동', 'male', '서울대');
// var kd = new Employee('길순', 'female', '삼성');

// var numbers = [1, 2, 3, 4, 5];
// var max = min = numbers[0]; // 1

// numbers.forEach(function(number, idx) {
//     console.log(idx + "번째 : " + number);
// });

// console.log(max,min);


//apply 활용
// var numbers = [1, 2, 3, 4, 5];

//일단 this를 생략하고 apply를 써서 바로 구해줄 수 있다.
// var max = Math.max.apply(null, numbers);
// var min = Math.min.apply(null, numbers);

// console.log(max,min);

// //spread operator도 Math.max()를 쓸 수 있다.
// //배열의 형태를 풀어줄수 있다.
// console.log(...numbers);

// var max = Math.max(...numbers);
// var min = Math.min(...numbers);

// console.log("s ->",max,min);