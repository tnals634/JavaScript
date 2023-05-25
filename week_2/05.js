//일급객체로써의 함수 (2)
//this는 자기자신을 가리키는거다.
//그래서 아래 person함수안에서 사용하는 this는
//person내의 것들을 가리킨다.
//즉 person.name 즉 this.name 은 john을 가리킨다.
const person = {
    name:'john',
    age: 30,
    isMarried: true,
    // sayHello:function(){
    //     //console.log('hello, my name is ' + this.name);
    //     console.log(`hello, my name is ${this.name}`);
    // },
    
    //화살표 함수로 
    sayHello: () => {
        console.log(`hello, my name is ${this.name}`);
    }
};

person.sayHello();