// 클래스라는 설계도를 만들어보자.
class Person {
    //필수 요소를 ()안에 넣어준다.
    //name,age
    constructor (name, age) {
        //this는 우리가 만들 인스턴스에 받은 인스턴스를 넣는다.
        this.name = name;
        this.age = age;
    }

    //이런 명사표현 뿐만아닌 동사표현도 가능하다.
    //메서트 형태의 동사표현
    sayHello () {
        console.log(`${this.name} hello`);
    }

    //내 나이는 ~살이에요! 라고 출력하는 메서드를 만들어보자.
    sayAge () {
        console.log(`${this.name}의 나이는 ${this.age}살이에요!`);
    }
}

//설계도를 통해 인스턴스(실제 사물))을 만들어보자.
const person1 = new Person("홍길동","30");
//->해석: 이름은 홍길동, 나이는30인 사람을 만들어줘, 설계도에 근거해서

const person2 = new Person("홍길순","20");

// person1.sayHello();
// person2.sayHello();
person1.sayAge();
person2.sayAge();