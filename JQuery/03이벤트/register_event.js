$(function () {
  //이벤트 등록 대상인 <button>버튼1</button>의 상위요소 <p>요소를 선택해서
  //선택한 상위요소 <p>내부에 만들어져 있는 <button>버튼1</button>하위요소에 mouseover 와  focus이벤트를 등록
  $(".btn_wrap").delegate(".btn_1.on", "mouseover focus", function () {
    alert("HELLO!");
  });
  //<button class="btn_1">버튼1</button>선택해서  class속성에 on값을 추가로 설정
  $(".btn_1").addClass("on");

  //----------------------------------------------------------------------------------------

  $(document).one("mouseover focus", ".btn_2.on", function () {
    alert("WELCOME!");
  });

  $(".btn_2").addClass("on");
});
