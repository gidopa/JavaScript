/*
	 	전체 형(이전)요소 선택자
	 	- 선택한 요소를 기준으로 바로 이전에 만들어져 있는 전체 형제요소들을  선택하는 선택자  prevAll()
	 	- 문법
	 			$("기준요소선택").prevAll()
	 			
	 	전체 동생(다음)요소 선택자 
	 	- 선택한 요소를 기준으로 바로 다음에 만들어진 전체 형제 요소들을  선택하는 선택자  nextAll() 
	 	- 문법
	 			$("기준요소선택").nextAll()  
	 			
	 */
$(function () {
  //객체 2개 생성
  //각 객체 내부에는 css스타일의 속성명에 대한 값들이 설정되어 있습니다.
  var style_1 = { "background-color": "aqua", border: "2px solid red" };
  var style_2 = { "background-color": "yellow", border: "2px dashed red" };

  $(".txt").prevAll().css(style_1);

  $(".txt").nextAll().css(style_2);
});
