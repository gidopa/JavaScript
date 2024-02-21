/*
			scroll()
			- 이벤트 대상요소를 선택해 대상요소에서 스크롤 막대바를 이동시키는 동작(이벤트)을 등록 하는 메소드.
			- 문법
				 $("이벤트대상요소선택").scroll(function(){ 이벤트처리코드;  });
		
				 $("이벤트대상요소선택").on("scroll", function(){ 이벤트처리코드; }   );
		
			- 스크롤 막대바를 강제로 이동 시키는 이벤트 방법 의 문법
				 $("이벤트대상요소선택").scroll();
		
		
		*/
//스크롤 막대바를 이동하는 동작(이벤트) 등록
$(window).on("scroll", function () {
  //스크롤 이벤트가 발생한 window창을 선택해서 가져와
  //scrollTop()메소드를 호출하여 스크롤 막대바가 세로(수직)방향으로 이동된 거릿값(현재위치하고 있는값) 얻을수 있다.
  var sc_top = $(this).scrollTop();
  console.log("수직:" + sc_top);
  //<span class="top">0</span> 선택해서 가져와
  // 0 대신  sc_top변수에 저장된 값으로 설정
  $(".top").text(sc_top);
  //-----------------------------------------------------------------
  var sc_left = $(this).scrollLeft();
  console.log("수평:" + sc_left);
  //<span class="left">0</span>
  // 0 대신 sc_left변수에 저장된 값으로 설정
  $(".left").text(sc_left);
});
