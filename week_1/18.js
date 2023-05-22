//while , do while, break continue
//1. while
// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++;
// }

//while문을 이용, 3초과 100미만의 숫자 중 5의 배수인것만
//출력

// let i = 3;
// while(i<100){
//     if(i % 5 === 0){
//         console.log(i);
//     }
//     i++;
// }


//do ~ while

// let i = 0;

// do {
//     console.log(i);
//     i++;
// }while (i < 10);

//break continue
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}