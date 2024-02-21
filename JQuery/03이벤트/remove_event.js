$(function () {
  //on메소드를 이용해  '기본이벤트등록방식' 과 '라이브 이벤트 등록방식' 을 사용해 각각의 버튼에 이벤트를 등록하자.

  //기본이벤트 등록방식이란? 미리 만들어져 있는 요소를 선택해 이벤트를 등록하는 방식
  $(".btn_1").on("mouseover", function () {
    alert("HELLO!");
  });

  //기본이벤트 등록 제거
  //<button class="del_1">버튼1 이벤트 해지</button>을 선택해 click이벤트 등록
  $(".del_1").on("click", function () {
    //<button class="btn_1">버튼1<button>요소에 등록된 "mouseover" 이벤트등록 제거
    $(".btn_1").off("mouseover");
  });

  //라이브 이벤트 등록 방식? 동적으로 생성된 요소에 이벤트를 등록하는 방식
  $(document).on("mouseover", ".btn_2", function () {
    alert("WELCOME!");
  });

  //동적으로 <p>한쌍을 만들어서 <div></div>사이에 추가!
  $("#wrap").append("<p><button class='btn_2'>버튼2</button></p>");

  //<button class="del_2">버튼2 이벤트 해지</button> 선택해서 클릭했을때...
  //라이브 이벤트 등록 방식 on()메소드를 사용해 등록된  "mouseover"이벤트 제거
  $(".del_2").on("click", function () {
    $(document).off("mouseover", ".btn_2");
  });
});
