//웹 브라우저창이 html문서 내부에 모든 HTML태그를 로딩했을때 이벤트 처리 함수 function이 호출되어 실행
$(function () {
  const a = $("#tit");
  a.css("background-color", "red").css("border", "2px solid yellow");
  console.log("a", a);
});
