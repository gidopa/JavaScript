$(function () {
  //id속성값이 menu인  <ul></ul>한쌍을 선택해오고
  //이 <ul>요소를 기준으로  후손li요소들을 배열에 담아 배열로 선택해 오는데
  //배열에 저장된 li요소들 중에서도  index위치가 짝수 인 공간에 저장된  후손 li요소들을 최종 선택
  //선택해온 li요소들 영역의 배경색을  aqua색으로 설정
  $("#menu li:even").css("background-color", "aqua");

  //id속성값이 menu인  <ul></ul>한쌍을 선택해오고
  //이 <ul>요소를 기준으로  후손li요소들을 배열에 담아 배열로 선택해 오는데
  //배열에 저장된 li요소들 중에서도  index위치가 홀수 인 공간에 저장된  후손 li요소들을 최종 선택
  //선택해온 li요소들 영역의 배경색을  pink색으로 설정
  $("#menu li:odd").css({ "background-color": "pink" });
});
