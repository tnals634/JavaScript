function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);
console.log(add(multiplyByTwo(10),multiplyByThree(10)));