$(function () {
  //1. <p>텍스트1</p> 선택해서 가져와    "텍스트1"  자리에  "내용1" 을 대신 넣자.
  $(".wrap_1 p").eq(0).text("내용1");

  //2. <p class="active">내용2</p> 선택해서 가져와  class="active" 를 삭제하고 대신 class="on" 삽입 하자.
  $(".active").removeClass("active").addClass("on");
  //3. <p><a href="#">네이버</a></p> 내부에 작성된  <a href="#">네이버</a>를 최종 선택해
  //    <a href="#">네이버</a>에  href="http://www.naver.com" 으로 설정 하자.
  //   $("[href]").attr("href", "http://www.naver.com");
  $(".wrap_1 p:eq(2) a").attr("href", "http://www.naver.com");
  //4.
  /*
        <p>
            <input type="text" value="Hello">
        </p>
        태그 내부에 작성되어 있는 <input type="text" value="Hello">요소를 선택해  value속성의 값을 "Korea"로 설정 하자.
    */
  $(".wrap_1 p:eq(3) input").val("Korea");
  //5. class="wrap_2"인 <div class="wrap_2">의 하위  첫번쨰 <p>내용5</p>를 최종 선택해
  //   <p>내용5</p> 바로 이전 위치에 <p>Before(추가2)</p> 추가 시키자.
  $(".wrap_2 > p:first").before("<p>Before(추가2)</p>");
  //6. class="wrap_2"인 <div class="wrap_2">의 하위  첫번쨰 <p>내용5</p>를 최종 선택해
  //   <p>내용5</p> 바로 다음 위치에 <p>After(추가2)</p> 추가 시키자.
  $(".wrap_2 p").eq(1).after("<p>After(추가2)</p>");
  //7. class="wrap_3"인 <div class="wrap_3">의 하위 모든 <p>를 선택해  부모요소인 <div>를 삭제시키고,
  //   <p>를  새요소인 <strong></strong>으로 모두 한번에 감싸자.
  $(".wrap_3 p").unwrap();
  $(".wrap_3 p").wrapAll("<strong></strong>");
});
