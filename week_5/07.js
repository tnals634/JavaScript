//클래스 연습해보기

//[요구사항]
// 1. car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
// 다음 네 개의 값이 필수로 입력해야 합니다.
// - modelName
// - modelYear
// - type
// - price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 3. 이후 자동차를 3개 정도 만들어주세요.(객체 생성)

//[추가 요구사항]
//1.전기차 클래스 <= car클래스의 상속을 받을거다.

class Car {
    constructor (modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }
    makeNoise(){
        console.log(`${this.modelName} 빵빵!`);
    }
    //2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성
    makeYear(){
        console.log(`${this.modelYear}년도 ${this.modelName}`);
    }
}

//전기차 클래스 정의
class ElectronicCar extends Car {
    constructor(modelName, modelYear, price, chargeTime) {
        //Car(부모 class)에게도 알려주기!※
        super(modelName, modelYear, 'e', price);
        this._chargeTime = chargeTime;
    }
    set chargeTime (value) {
        this._chargeTime = value;
    }
    get chargeTime() {
        return this._chargeTime;
    }
}

let eleCar1 = new ElectronicCar("테슬라","2023",9000000, 60);
eleCar1.makeNoise();
eleCar1.makeYear();
console.log("---------");
console.log(eleCar1._chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1._chargeTime);
// let car1 = new car("sorento","2023","e",5000);
// let car2 = new car("5m5","1999","g",3000);
// let car3 = new car("pal","2010","d",4500);
// car1.makeNoise();
// car1.makeYear();
// car2.makeNoise();
// car2.makeYear();
// car3.makeNoise();
// car3.makeYear();