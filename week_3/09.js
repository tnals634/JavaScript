// //나이든 유저 숙제
// var user = {
//     name: "john",
//     age: 20,
// }

// var getAged = function (user, passedTime) {
// 		// 여기를 작성해 주세요!
//         var person = {};
//         for (var num in user){
//             person[num] = user[num];
//         }
//         person.age += passedTime;
//         return person;
// }


// var agedUser = getAged(user, 6);

// var agedUserMustBeDifferentFromUser = function (user1, user2) {
//     if (!user2) {
// 		    console.log("Failed! user2 doesn't exist!");
// 	  } else if (user1 !== user2) { 
//         console.log("Passed! If you become older, you will be different from you in the past!")
//     } else {
//         console.log("Failed! User same with past one");
//     }
// }

// agedUserMustBeDifferentFromUser(user, agedUser);


//2번째 숙제
//어떤 매치가 성사될것인지, 그이유가 뭔지 설명하기
//브라우저 개발자 도구(F12)에서 실행할것
var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);

//우선 첫번째 console.log가 실행할때 fingter.opponent.getFullname()에 먼저 들어간다.
//그럼 fighter 이라는 함수 안에 fullname을 지나 opponent에 들어가 그안에 있는 getFullname이 가리키는 바로 위 fullname인 francis ngannou을 가져온다.
//그리고 fighter.getName()은 마찬가지로 fighter로 들어가 opponent을 건너 뛰고 getName을 가져오는데 여기서 가리키는 this는 
//opponent위에 있는 fullname인 john jones를 가리키고 있기 때문에 그 값을 가져온다.

//두번째 console.log가 실행할때 fingter.getName()은 fingter에 들어가 getName으로 this가 가리키는 fullName인 John jones를 가져오고,
//fighter.getFirstName()은 fighter에 들어가 getFirstName에 들어가면 이건 화살표함수이기때문에 바인딩이 되지 않기 때문에 this는 밖에있는 fullname의 'ciry1 gane'중 index가 0번째인 ciry1을 가져오고,
//figther.getLasName은 함수이기때문에 this가 지역객체가 아닌 전역객체를 가리키기 때문에 전역객체인 fullname의 'ciry1 gane'이름 중 index가 1번째인 gane을 가져오게 된다.