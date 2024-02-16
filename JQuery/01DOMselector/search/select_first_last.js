$(function () {
  //id속성값이 menu인  ul요소를 선택해서 가져오고
  //ul요소를 기준으로해서 모든 후손 li요소들을 선택해 옵니다.
  //li요소들 중에서도  첫번째 작성되어 있는 li요소 하나만 최종 선택해서 가져옵니다.
  // 		$("#menu li:first").css("background-color","aqua");

  // 		$("#menu li:first").css( {"background-color":"aqua"} );

  $("#menu li").first().css({ "background-color": "aqua" }); //<li>내용1</li> 첫번째

  //id속성값이 menu인 ul요소를 선택해서 가져오고
  //ul요소를 기준으로해서 모든 후손 li요소들을 배열에 담아 선택해옵니다.
  //li요소들 중에서도 마지막에 작성된 li후손요소 하나만 최종 선택해서 가져옵니다.
  // 		$("#menu li:last").css("background-color","pink");

  $("#menu li").last().css("background-color", "yellow"); //<li>내용4</li>  마지막번째
});
