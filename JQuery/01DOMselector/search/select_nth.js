$(function () {
  // #menu1 li  <-  id="menu1"인 <ul> 내부의 모든 <li>후손요소들을 배열에 담아 선택하는데
  // #menu1 li:nth-child(1)   <- 배열에 담긴 <li>후손요소들 중에서도  첫번째 <li>요소만 최종 선택 해 옴
  //<li>내용1-1</li>
  $("#menu1 li:nth-child(1)").css("background-color", "red");

  // #menu1 li  <-  id="menu1"인 <ul> 내부의 모든 <li>후손요소들을 배열에 담아 선택하는데
  // #menu1 li:nth-child(2n)  <- 배열에 담긴 <li>후손요소들 중에서도 2의 배수번째에 위치한  2번째 4번째 <li>요소들을 최종 선택해옴
  //<li>내용1-2</li>     <li>내용1-4</li>
  $("#menu1 li:nth-child(2n)").css("background-color", "pink");

  // id속성값이 menu2인  <ul>요소를 선택해 오고
  // <ul>요소를 기준으로 후손 <li>들을 배열에 담아 선택해 오는데
  // <li>요소들 중에서도 3의 배수번째에 위치한 <li>요소들을 최종 선택해옴
  $("#menu2 li:nth-child(3n)").css("background-color", "green");

  //nth-last-of-type(숫자) 위치탐색 선택자는
  //앞에서 선택한 모든 li중에서  거꾸로 위치를 세어  지정한 숫자의 위치에 있는 <li>내용2-2</li>를 최종 선택해옴
  // 			$("#menu2 li:nth-last-of-type(2)").css("background-color","blue");
  $("#menu2 li:nth-last-child(2)").css("background-color", "blue");
});
