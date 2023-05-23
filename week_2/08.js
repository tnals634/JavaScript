//Map

//Map, Set 목적 : 데이터의 구성, 검색, 사용을
// 기존의 객체 또는 배열보다 효율적으로 처리 

// 1. Map
// key - value
// key에 어떤 데이터타입도 다들어올 수 이다.
// Map은 키가 정렬된 순서로 저장되기 때문
// 기능 : 검색, 삭제, 제거, 여부 확인

//넣는법
const myMap = new Map();
// myMap.set('key','value');

// //검색
// myMap.get('key');

//반복이 가장 중요 -> 반복을 위한 api
//Map의 반복 -> method : keys, values, entries
//반복문은 아래와 같이 사용한다. 
//for ( of ){}
for(const key of myMap.keys()){

}
