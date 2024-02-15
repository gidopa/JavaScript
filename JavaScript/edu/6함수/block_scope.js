let a = 10; // 전역
{
  let b = 20; // 지역
  console.log("a", a);
  console.log("b", b);
}
console.log("오늘 사천탕수육, 간짜장, 만두, 새우볶음밥, 미역국");
console.log("a", a);
console.log("b", b);

// 블록 내부에서만 존재하는 지역변수
// 블록 문안에서 var를 쓰면 전역임
