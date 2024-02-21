/*
        mouseenter() 
        - 선택한 요소에 마우스포인터를 올리는 동작(이벤트)을 등록시키는 메소드로,
          mouseover와는 달리 버블링 발생하지 않습니다.
           버블링이 발생하지 않기 떄문에 이벤트가 발생한 요소에서만 이벤트 처리를 수행 합니다.
           
       - 문법1.
            $("이벤트대상요소선택").mouseenter(function(){ 이벤트처리코드;  });
           문법2.
            $("이벤트대상요소선택").on("mouseenter", function(){ 이벤트처리코드; });
            
        - mouseenter이벤트를 선택한 이벤트대상요소에 강제로 발생시키기 위한 문법
            $("이벤트대상요소선택").mouseenter();
        
           
           
        mouseleave()
        - 선택한 요소에 마우스포인터를 벗어나게 하는 동작(이벤트)을 등록시키는 메소드로,
          mouseout와는 달리 버블링 발생하지 않습니다.
           버블링이 발생하지 않기 떄문에 이벤트가 발생한 요소에서만 이벤트 처리를 수행 합니다.
           
       - 문법1.
            $("이벤트대상요소선택").mouseleave(function(){ 이벤트처리코드;  });
           문법2.
            $("이벤트대상요소선택").on("mouseleave", function(){ 이벤트처리코드; });
            
        - mouseleave이벤트를 선택한 이벤트대상요소에 강제로 발생시키기 위한 문법
            $("이벤트대상요소선택").mouseleave();		
    */
$(function () {
  //<div id="box_1"></div>요소를 선택해서  mouseout이벤트 등록 !
  //사이트 이용자가 mouseout이벤트를 했을때
  //<div id="box_1"></div>요소를 선택해서  배경색을 노란색으로 설정!
  $("#box_1").on("mouseout", function () {
    $("#box_1").css("background-color", "yellow");
  });

  //<div id="box_2"></div>요소를 선택해서  mouseleave이벤트 등록 !
  //사이트 이용자가 mouseleave이벤트를 했을때
  //<div id="box_2"></div>요소를 선택해서  배경색을 분홍색으로 설정!
  $("#box_2").on("mouseleave", function () {
    $("#box_2").css("background-color", "pink");
  });
});
