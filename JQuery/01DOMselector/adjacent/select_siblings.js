/*
	 	전체 형제 요소 선택자
	 	- 의미 : 선택한 요소의 모든 형제요소들을 선택하는 선택자  siblings()
		- 문법
				$("기준요소선택").siblings()
	 			
	 */
$(function () {
  //객체 1개 생성
  //객체 내부에는 css스타일의 속성명에 대한 값들이 설정되어 있습니다.
  var style_1 = { "background-color": "aqua", border: "2px solid red" };

  //class=txt인 <p class="txt">내용2</p>를 기준요소로 선택해오고
  //이 <p>요소를기준으로  이전 그리고 다음에 만들어져 있는 모든 형제요소들을 선택해 올때 siblings() 전체형제요소 선택자 사용!
  $(".txt").siblings().css(style_1);
});
