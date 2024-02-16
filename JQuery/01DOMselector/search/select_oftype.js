$(function () {
  //모든 li요소들을 한번에 배열하나에 담아서 선택해 오는데
  //li요소들 중에서도 첫번째로 작성된 li요소들만 최종 선택해 옵니다.
  //각 ul  내부에 적힌  첫번째 <li>내용1-1</li> 그리고 <li>내용2-1</li> 를 최종 선택해 옴
  $("li:first-of-type").css("background-color", "yellow");

  //ul -> 모든 ul 두쌍을 배열에 담아서 선택해 오는데...
  //ul li -> 모든 ul의 하위 li요소들을 각각 다른 배열에 담아 선택해 오는데..
  //ul li:last-of-type -> 2개의 배열에 각각 저장된 li요소들 중에서도 마지막에 작성된 li후손요소들만 최종 선택 해 옴
  //각 ul 내부에 적힌 마지막에 작성된 <li>내용1-3</li> 그리고  <li>내용2-3</li> 를 최종 선택 해 옴
  $("ul li:last-of-type").css("background-color", "pink");

  // 		$("ul:eq(0) li:last").css("background-color","red");

  // 		$("ul:eq(1) li:last").css("background-color","blue");
});
