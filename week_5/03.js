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

class car {
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

let car1 = new car("sorento","2023","e",5000);
let car2 = new car("5m5","1999","g",3000);
let car3 = new car("pal","2010","d",4500);
car1.makeNoise();
car1.makeYear();
car2.makeNoise();
car2.makeYear();
car3.makeNoise();
car3.makeYear();