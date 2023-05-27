//refactoring
//다시 짓는다.
//비효율적인 코드 -> 효율적으로 변경

var addCoffee = function(name){
    return function(prevName) {
        //이안에서도 새롭게 promise를 만들어요
        return new Promise(function(resolve){
            setTimeout(function(){
                //백틱 ````
                var newName = prevName ? `${prevName} , ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};

addCoffee('에스프레소')()
.then(addCoffee('아메리카노'))
.then(addCoffee('카페모카'))
.then(addCoffee('카페라떼'));