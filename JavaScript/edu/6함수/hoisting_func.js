Hello();

function Hello() {
  console.log("Hello");
}
// 함수 선언문으로 만든 함수 정의문은 호이스팅 가능, 함수표현식, 화살표 함수는 호이스팅 불가능

// 아래의 방법들은 const varName ; let, const는 hoisting 안됨, var로 해도 var varName; 이렇게 hoisting 되기 때문에 함수가 아니라고 나옴

hi();
const hi = function () {
  console.log("hi");
};

a();
const a = () => {
  console.log("a");
};
