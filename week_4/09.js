// //비동기적 코드의 이해
// setTimeout(function(){
//     console.log('여기가 먼저일까?');
// },1000);

// console.log('여기 봐주시요');

//예시코드
// setTimeout(
//     function (name) {
//       var coffeeList = name;
//       console.log(coffeeList);
  
//       setTimeout(
//         function (name) {
//           coffeeList += ", " + name;
//           console.log(coffeeList);
  
//           setTimeout(
//             function (name) {
//               coffeeList += ", " + name;
//               console.log(coffeeList);
  
//               setTimeout(
//                 function (name) {
//                   coffeeList += ", " + name;
//                   console.log(coffeeList);
//                 },
//                 500,
//                 "카페라떼"
//               );
//             },
//             500,
//             "카페모카"
//           );
//         },
//         500,
//         "아메리카노"
//       );
//     },
//     500,
//     "에스프레소"
//   );

//기명함수(이름이 있는 함수)로 바꿀 수 있다.
//기명함수로 변환
//근본적인 해결책이라고는 할 수 없다.
//   var coffeeList = '';

// var addEspresso = function (name) {
// 	coffeeList = name;
// 	console.log(coffeeList);
// 	setTimeout(addAmericano, 500, '아메리카노');
// };

// var addAmericano = function (name) {
// 	coffeeList += ', ' + name;
// 	console.log(coffeeList);
// 	setTimeout(addMocha, 500, '카페모카');
// };

// var addMocha = function (name) {
// 	coffeeList += ', ' + name;
// 	console.log(coffeeList);
// 	setTimeout(addLatte, 500, '카페라떼');
// };

// var addLatte = function (name) {
// 	coffeeList += ', ' + name;
// 	console.log(coffeeList);
// };

// setTimeout(addEspresso, 500, '에스프레소');