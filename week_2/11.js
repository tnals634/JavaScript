function Strings(strings, n){
    //배열 선언
    var answer = new Array(strings.length);
    //반복문
    for(let i = 0; i < strings.length; i++){
        //answer배열에 받은 인덱스 자리의 문자를 잘라서 넣어준다.
        answer[i] = strings[i].substr(n,1);
        console.log(answer[i]);
    }
    var temp = "";
    for(let i = 0; i < strings.length - 1; i++){
        for(let j = i + 1; j < strings.length; j++){ 
            //이중반복문으로 전의 answer과 후의 answer를 비교한다.           
            if(answer[i] > answer[j]){
                //후의 값이 더 크면 strings의 전의 값과 후의 값의 자리를
                // 바꿔준다.
                temp = strings[i];
                strings[i] = strings[j];
                strings[j] = temp;
            }
            //만약 뽑은 문자가 같은 거라면
            if(answer[i] === answer[j]){
                //두개의 문자열을 따로 비교해본다.
                var string1 = new Array(strings[i].length);
                var string2 = new Array(strings[j].length);
                var count = 0;
                for(let z = 0; z < strings[i].length; z++){
                    //각각 문자를 잘라서 넣어준 후
                    string1[z] = strings[i].substr(z,1);
                    string2[z] = strings[j].substr(z,1);
                    //비교해서 조건이 맞으면 count를 올려준다.
                    if(string1[z] > string2[z]){
                        count++;
                    }
                }
                //만약 count값이 0이 아니면 서로 바꿔준다.
                if(count !== 0) {
                    temp = strings[i];
                    strings[i] = strings[j];
                    strings[j] = temp;
                }
            }
        }
    }
    return strings;
}

let strings = ["abce","abcd","cdx"];
Strings(strings, 2);