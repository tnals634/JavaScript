//이런 패턴은 어떨까요?
// var copyObject = function (target) {
//     var result = {};

//     //for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에
//     //접근할 수 있습니다.
//     //하드코딩을 하지 않아도 괜찮아요.
//     //이 copyObject로 복사를 한 다음, 복사를 완료한
//     //객체의 프로퍼티를 변경하면 되겠죠?
//     for(var prop in target){
//         result[prop] = target[prop];
//     }
//     return result;
// }

//패턴 적용 모습
var copyObject = function (target) {
    var result = {};
    for(var prop in target){
        result[prop] = target[prop];
    }
    return result;
}
var user = {
    name: "wonjang",
    gender:"male",
};

var user2 = copyObject(user);
user2.name="twojang";

if(user !== user2){
    console.log("유저 정보 변경");
}

console.log(user.name,user2.name);
console.log(user === user2);