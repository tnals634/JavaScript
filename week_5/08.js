//Static Method = 정적 메소드
//class -> 객체를 만들기 위해 사용
//다량으로 안전하고 정확하게

class Calculator {
    
    static add(a, b) {
        console.log("더하기 진행");
        return a + b;
    }

    static sub(a, b) {
        console.log("빼기 진행");
        return a - b;
    }
}

console.log (Calculator.add(3, 5));
console.log (Calculator.sub(3, 5));