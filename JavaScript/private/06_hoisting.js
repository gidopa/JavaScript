/**
* Hoisting
* - 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 동작하는 현상
*/
console.log('Hello');
console.log("World");
console.log();
console.log(name);
var name = '코드팩토리';
console.log(name);

console.log(yuJuin);
let yujin = '안유진';
console.log(ahnYuJin);
const ahnYuJin = '안유진';