//addEventListener을 이해하기 위해
//map함수를 직접 구현해보자.
Array.prototype.map123 = function(callback, thisArg) {
    //함수에서 return할 결과 배열
    var mappedArr = {};

    for(var i = 0; i<this.length; i++) {
        var mappedValue = callback.call(thisArg || global, this[i]);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};
var newArr = [1,2,3].map123(function(number){
    return number * 2;
});

console.log(newArr); //{ '0': 2, '1': 4, '2': 6 }
