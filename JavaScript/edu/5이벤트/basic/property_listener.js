const btn = document.querySelector("button");
//버튼요소에 onclick 이벤트 속성을 작성해 이벤트를 등록하고 onclick이벤트가 발생되면 처리할 function을 만든다

// btn.onclick = function () {
//   console.log("click");
// };

// 함수를 별도로 정의
// function clickEvent() {
//   console.log("??");
// }
// btn.onclick = clickEvent;
// btn.onclick = clickEvent() 라고하면 한번만 호출되고 안된다 이건 호출해버리는거고
// clickEvent로 하면 함수의 참조가 할당된다

// ES6 환경이라면 코드를 화살표 함수로 작성해도 된다
btn.onclick = () => {
  console.log("click");
};
