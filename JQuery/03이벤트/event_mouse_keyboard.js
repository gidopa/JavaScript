$(function () {
  //마우스에 대응되는 키보드 이벤트 등록 안함!  비추천
  $("#btn1").data({ text: "javascript" }).on({
    mouseover: overFnc,
    mouseout: outFnc,
  });

  //마우스 이벤트에 대응되는 키도브 이벤트 다중 등록! 추천
  $("#btn2").data({ text: "welcome!" }).on({
    "mouseover focus": overFnc,
    "mouseout blur": outFnc,
  });

  //선택한 버튼요소에 마우스포인터를 올리는 순간 호출되는 이벤트핸들러 함수로
  //이벤트처리코드를 실행하는 함수 입니다.
  function overFnc() {
    $(".txt").text($(this).data("text"));
  }

  //선택한 버튼요소에 마우스포인터가 올라가 있다가 내리는 순간 호출되는 이벤트 핸들러 함수로
  //이벤트처리코드를 실행하는 함수 입니다.
  function outFnc() {
    $(".txt").text("");
  }
});
