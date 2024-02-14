function sum(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else {
    return;
  }
}
console.log("sum(10,20)", sum(10, 20));
console.log("sum(10,'gd')", sum(10, "gd"));

console.log("------------------------------------------------------");
//화살표 함수에서 {}를 생략하면 다음에 오는 코드는 return문으로 처리
const mul = (a, b) => a * b;
console.log("mul(3,4)", mul(3, 4));
