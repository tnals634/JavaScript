//[요구사항]
// 1. car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
// 다음 네 개의 값이 필수로 입력해야 합니다.
// - modelName
// - modelYear
// - type
// - price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
//2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성
// 3. 이후 자동차를 3개 정도 만들어주세요.(객체 생성)

//[추가 요구사항]
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. 이것을 세팅하는 메서드
// 3. 마지막에 set해서 get하는 로직까지

class car {
    constructor (modelName, modelYear, type, price) {
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }
    makeNoise(){
        console.log(`${this._modelName} 빵빵!`);
    }
    //2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성
    makeYear(){
        console.log(`${this._modelYear}년도 ${this._modelName}`);
    }
    allCar() {
        console.log(`${this._modelName} | ${this._modelYear} | ${this._price} | ${this._type}`);
    }
    get modelName(){
        return this._modelName;
    }
    //입력값에 대한 검증까지 가능하다.
    set modelName(value) {
        //유효성 검사
        if(value.length <= 0){
            console.log("error: 입력값이 없습니다.");
            return;
        }else if(typeof value !== 'string'){
            console.log("error: 입력값이 문자형이 아닙니다.");
            return;
        }
        this._modelName = value;
    }
    get modelYear(){
        return this._modelYear;
    }
    set modelYear(value) {
        //유효성 검사
        if(value.length !== 4){
            console.log("error: 입력년도가 4자리가 아닙니다.");
            return;
        }else if(typeof value !== 'string'){
            console.log("error: 입력값이 문자형이 아닙니다.");
            return;
        }
        this._modelYear = value;
    }
    get price(){
        return this._price;
    }
    set price(value) {
        //유효성 검사
        if(value < '1000000'){
            console.log("error: 가격은 100만원보다 커야합니다.");
            return;
        }else if(typeof value !== 'number'){
            console.log("error: 입력값이 숫자가 아닙니다.");
            return;
        }
        this._price = value;
    }
    get type(){
        return this._type;
    }
    set type(value) {
        //유효성 검사 g(가솔린),e(전기차),d(디젤)
        if(value.length <= 0){
            console.log("error: 입력타입값이 없습니다.");
            return;
        }else if(value !== 'g' && value != 'e' && value != 'd'){
            console.log("error: 입력타입이 잘못됬습니다.");
            return;
        }
        this._type = value;
    }
}

let car1 = new car("sorento","2023","e",5000);
let car2 = new car("5m5","1999","g",3000);
let car3 = new car("pal","2010","d",4500);
// car1.makeNoise();
// car1.makeYear();
// car2.makeNoise();
// car2.makeYear();
// car3.makeNoise();
// car3.makeYear();

//getters 예시
console.log(car1.modelName, car1.modelYear, car1.price, car1.type);
//setters 예시
car1.modelName = 'kia';
car1.modelYear = "1995";
car1.type = "e";
car1.price = 30000000;
console.log(car1.modelName, car1.modelYear, car1.price, car1.type);