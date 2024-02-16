$(function () {
  //id="menu"인 <ul></ul>요소 한쌍을 선택해 오고
  //ul요소를 기준으로 후손 <li></li>요소들을 모두 배열에 담아 배열로 선택해 오고
  //<li></li>요소들중에서도  2 index위치에 저장된  <li>내용3</li>요소만 최종 선택
  // 	$("#menu li:eq(2)").css({"background-color":"red"});

  $("#menu li").eq(2).css({ "background-color": "red" });

  //id="menu"인 <ul></ul>요소 한쌍을 선택해 오고
  //ul요소를 기준으로 후손 <li></li>요소들을 모두 배열에 담아 배열로 선택해 오고
  //<li></li>요소들 중에서도 지정한 2 index 이전 위치 index인  1과 0 index위치에 저장된  <li>내용2</li>  <li>내용1</li>들을 최종 선택
  $("#menu li:lt(2)").css({ "background-color": "aqua" });

  //id="menu"인 <ul></ul>요소 한쌍을 선택해 오고
  //ul요소를 기준으로 후손 <li></li>요소들을 모두 배열에 담아 배열로 선택해 오고
  //<li></li>요소들 중에서도 지정한 2 index 다음 위치 index인  3과 4 index위치에 저장된  <li>내용4</li>  <li>내용5</li>들을 최종 선택
  $("#menu li:gt(2)").css({ "background-color": "pink" });
});
