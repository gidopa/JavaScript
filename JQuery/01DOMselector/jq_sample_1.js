//script 선언문의 선언 위치에 따라 jquery 선택자를 이용해 DOM요소 선택 가능 여부가 결정된다
// document.getElementById("title").style.color = "red";
// $("#title").css("color", "red");
//아직 dom 요소를 읽어오지 않아 스크립트가 안먹을때는 window.onload이벤트를 작성해놓으면 브라우저가 html파일을 모두
//읽은 상태에서 시작.

// js
// window.onload = function () {
//    document.getElementById("title").style.color = "red";
// };

//jquery
// $(function () {
//   $("title").attr("color", "red");
// });

// document.getElementById("title").style.color = "red";
$("#title").css("color", "red");
