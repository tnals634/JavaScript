const myMap = new Map();
myMap.set('one',1);
myMap.set('two',2);
myMap.set('three',3);

// console.log(myMap.keys());
// for (const key of myMap.keys()){
//     console.log(key);
// }

// console.log(myMap.values());
// for(const value of myMap.values()){
//     console.log(value);
// }

console.log(myMap.entries());
for(const entry of myMap.entries()){
    console.log(entry);
}

//Map 크기 확인
console.log(myMap.size);
console.log(myMap.has("two"));// 키 기반 검색
