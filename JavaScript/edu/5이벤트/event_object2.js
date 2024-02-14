const input = document.querySelector("input");
/*KeyboardEvent 주요 속성
    keyCode             눌린 키의 유니코드 값을 반환
    ctrlKey             ctrl 눌러졌으면 true를 반환'
    altKey              alt키가 눌러졌으면 true 반환
    shiftKey


*/
input.addEventListener("keydown", function (event) {
  console.log(`keyCode : ${event.keyCode}`);
});
