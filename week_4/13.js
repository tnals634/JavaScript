//promise를 이용하는 방법
//이전 방법 : then(그러면~)
//이번 방법 : async(비동기) / awit(기다리다)

//coffeemaker함수에서 호출할 함수 addcoffee 선언
//promise를 반환
var addCoffee = function (name) {
	return new Promise(function (resolve) {
		setTimeout(function(){
			resolve(name);
		}, 500);
	});
};

// *** 
var coffeeMaker = async function () {
	var coffeeList = '';
	var _addCoffee = async function (name) {
		coffeeList += (coffeeList ? ', ' : '') + await addCoffee(name);
	};

    //promise를 반환하는 함수인 경우
    //awit를 만나면 무조건 끝날 때 까지 기다린다.

    //만약 await _addCoffee('에스프레소'); 이 코드가 실행하는데 100초가 걸린다면
	await _addCoffee('에스프레소');
    //이 console.log는 100초 뒤 실행
	console.log(coffeeList);
	await _addCoffee('아메리카노');
	console.log(coffeeList);
	await _addCoffee('카페모카');
	console.log(coffeeList);
	await _addCoffee('카페라떼');
	console.log(coffeeList);
};

coffeeMaker();