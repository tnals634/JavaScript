//얕은 복사의 문제
var copyObject = function (target) {
    var result = {};
    for(var prop in target){
        result[prop] = target[prop];
    }
    return result;
}

var user = {
    name: "wonjang",
    urls: {
        portfolio: '~~',
        blog: 'http://blog~~',
        facebook: 'http://facebook~~',
    }
};

var user2 = copyObject(user);
user2.name = "twojang";

//바로 아래 단계에 대해서는 불변성을 유지하기 때문에 값이 달라짐.
console.log(user.name === user2.name); //false

//더 깊은 단계에 대해서는 불변성을 유지하지 못하기 때문에
//값이 같다.
user2.urls.blog = 'http://blog+++';
console.log(user.urls.blog === user2.urls.blog); // true


//재귀적 수행
var copyObjectDeep = function(target) {
    var result = {};
    if(typeof target === 'object' && target !=null){
        for(var prop in target){
            //자기자신을 불러오는것이 재귀적 수행
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
}