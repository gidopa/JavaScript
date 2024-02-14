/*
    this라는 키워드를 사용하면 이벤트가 발생당한 요소노드를 바로 카리켜 사용할 수 있다.
    주제 : 모든 p태그를 선택해 click이벤트를 등록하고 이벤트가 발생하면 호출되는 function 함수 내에서 this키워드를 이용해 콘솔창에 출력
*/
const p = document.querySelectorAll("p");
p.forEach(function (el) {
  el.addEventListener("click", function () {
    //click이벤트가 발생당한 p를 선택해오는 this
    console.log("this", this);
    if (this.style.color === "red") {
      this.style.color = "black";
    } else {
      this.style.color = "red";
    }
  });
});
