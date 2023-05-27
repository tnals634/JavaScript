//Getters와 Setters
//객체지향 프로그래밍 언어 -> g, s
//클래스 -> 객체(인스턴스)
//인스턴스 안에 -> 프로퍼티(constructor)
//new class(a,b,c)

class Rectangle {
    constructor (width, height) {
        //underscore : private(은밀하고, 감춰야할때) _
        this._width = width;
        this._height = height;
    }

    //getter
    get width () {
        return this._width;
    }

    //setter
    set width (value) {
        //검증 : value>0 error
        if(value <= 0){
            console.log("error : 가로값이 0보다 커야합니다.");
            return;
        }else if(typeof value !== 'number') {
            console.log("error : 가로입력값이 숫자가 아닙니다.");
            return;
        }

        this._width = value;
    }

    get height () {
        return this._height;
    }

    set height(value) {
        if(value <= 0){
            console.log("error : 세로값이 0보다 커야합니다.");
            return;
        }else if(typeof value !== 'number') {
            console.log("error : 세로입력값이 숫자가 아닙니다.");
            return;
        }
        this._height = value;
    }

    //getArea : 가로 * 세로 => 넓이
    getArea() {
        let a = this._width * this._height;
        console.log(`넓이는 ${a}입니다.`);
    }
}

//인스턴스 생성
let rect1 = new Rectangle(10,5);
rect1.getArea();
// let rect2 = new Rectangle(10,10);
// let rect3 = new Rectangle(10,15);