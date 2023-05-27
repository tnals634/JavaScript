// 상속 (inheritance)
// class -> 유산으로 내려주는 주요 기능
// 부모 <->자식

// 예시
//동물 전체에 대한 클래스
class Animal{
    //생성자
    constructor (name) {
        this.name = name;
    }

    //메서드(짖다)
    speak () {
        console.log(`${this.name} says!`);
    }
}

class Dog extends Animal {
    //부모에게서 내려받은 메서드 재정의 가능
    //overriding..->단골 질문 중 하나
    speak() {
        console.log(`${this.name} barks!`);
    }
}

let cutyPuppy1 = new Dog('baduki');
cutyPuppy1.speak();