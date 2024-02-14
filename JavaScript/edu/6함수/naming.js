const gugudan = function gugudan(n) {
  for (let i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};
console.log("gugudan(5)", gugudan(5));
console.log("------------------------------------");

const gugudan2 = function (n) {
  for (let i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};

console.log("gugudan2(4)", gugudan2(4));
/*
    함수 표현식으로 함수를 정의할떄는 const키워드를 주로 사용
    var, let 키워드를 사용해도 문제없지만, const가 권장된다
    보통 함수는 일관된 목적을 가진 코드의 집합이라서 재정의해서도, 재할당해서도 안된다
*/
