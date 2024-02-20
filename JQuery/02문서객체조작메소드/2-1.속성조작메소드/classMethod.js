$(function () {
  //addClass()
  //- 요소를 선택하여 설정한 class속성과 값을 추가시키는 메소드
  //- 문법
  //      $("요소선택").addClass("class속성에추가할값");
  $("#p1").addClass("aqua");

  //removeClass()
  //- 요소를 선택하여 설정되어 있는 class속성과 값을 삭제시키는 메소드
  //- 문법
  //      $("요소선택").removeClass("삭제할class속성의값");
  $("#p2").removeClass("red");

  /*	
    <p id="p1" class="aqua"  >내용1</p>
    <p id="p2" class>내용2</p>
    <p id="p3" class="green">내용3</p>
    <p id="p4" class="green">내용4</p>
    <p id="p5" class="yellow">내용5</p>
    <p id="p6"></p>
*/

  //toggleClass()
  //- 요소를 선택하여 설정한 class속성에 대한 값이 있으면 class속성에 대한 값을 삭제하고,
  //  없으면 class속성에 대한 값을 새로 추가 하는 기능의 메소드
  //- 문법
  //		$("요소선택").toggleClass("추가 또는 삭제할 class속성값")

  //세번째 <p id="p3">내용3</p>를 선택해서 가져 와서
  //toggleClass("green")메소드를 호출하면
  //class="green"이 설정되어 있지 않으면  추가 !
  //추가한 모습   <p id="p3" class="green">내용3</p>
  $("#p3").toggleClass("green");

  //네번쨰 <p id="p4" class="green">내용4</p>를 선택해서 가져와서
  //toggleClass("green")메소드를 호출하면
  //class="green"설정되어 있으므로  코드 삭제!
  $("#p4").toggleClass("green");

  //hasClass()
  //- 선택한 요소에 설정한 class속성에대한 값이 있으면 true반환, 없으면 false를 반환 하는 메소드
  //- 문법
  //     $("요소선택").hasClass("class속성값");

  $("#p6").text($("#p5").hasClass("yellow"));
});
