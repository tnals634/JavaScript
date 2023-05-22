//1.
// function solution(s){
//     let result = true;
//     s = s.toUpperCase();
//     let num = 0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i] ==='P') num++;
//         if(s[i] === 'Y') num--;
//     }
//     if(num === 0) result = true;
//     else result = false;
//     return result;
// }

// console.log(solution("Pyy"));


//2. 
// function solution(absolutes, signs){
//     let num = 0;
//     for(let i = 0; i < absolutes.length; i++){
//         signs[i] ? num += absolutes[i] : num-= absolutes[i];
//     }

//     return num;
    
// }
