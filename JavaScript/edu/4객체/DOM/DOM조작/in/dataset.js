/*
    데이터 속성 조작
    - HTML5버전에서 새로 추가된 data-cnt속성은 HTML문법에서 사용할 수 있는 속성 외에
      사용자가 원하는 속성을 추가할 수 있도록 한 사용자 정의 속성
      data-cnt라는 속성은 js에서 dataset 속성으로 조작할 수 있다
      data-set속성은 HTML 문서에서 data-cnt속성의 값을 가져오거나 설정할 때 사용
*/
const buttonEls = document.querySelectorAll("button");
const btnEls = document.getElementsByTagName("button");
//forEach()메소드는 반복하면서 각 요소에 대해 한번씩 function 실행
console.log("buttonEls", buttonEls);
console.log("btnEls", btnEls);
// 요소.dataset.cnt 로 data-cnt의 값을 가져올 수 있음

Array.from(btnEls).forEach(function (el) {
  console.log("btnEls.el", el);
  console.log("btnEls.el.dataset", el.dataset);
});
buttonEls.forEach(function (el) {
  console.log("buttonELs.el.dataset.cnt", el.dataset.cnt);
  el.dataset.cnt = 50;
  console.log("buttonELs.el.dataset.cnt", el.dataset.cnt);
});
