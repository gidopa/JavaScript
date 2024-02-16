$(function () {
  //<li>내용1-2</li>	  <!--  1 -->
  //<li>내용1-3</li>     <!--  2 -->
  $("#menu1 li").slice(1, 3).css("background-color", "red");

  //모든 <li>요소들 중에서 ~~~   선택할 <li>요소가 부모<ul>요소에 하나뿐인 자식요소이면 선택합니다.
  $("li:only-child").css("background-color", "blue");
});
