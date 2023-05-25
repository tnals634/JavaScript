//bind
var obj = {
    name: 'obj',
    func: function () {
        console.log(this.name);
    },
};

// var boundObj = obj.func.bind(obj);
// setTimeout(boundObj, 1000);

//함수 자체를 bind하는 방법
var obj2 = {name: "obj2"};
setTimeout(obj.func.bind(obj2),1500);