//부모 요소 선택자   ->   parent()메소드

//사용 문법
//$("요소선택").parent();

//웹 문서의 HTML태그들을 브라우저가 로딩 해서 모두 읽어 들인 상태가 되어  JQUERY문법 사용 준비가 되면 function이 호출되어 실행함
$(document).ready(function () {
  //id속성의 값이 list_1인  하위 안쪽 <li>먼저 선택해오고
  //이  <li>를 기준으로 감싸고 있는 근거리에 있는 <ul>부모요소를 최종 선택해옴
  $("#list_1").parent().css("border", "2px dashed #f00");
});
