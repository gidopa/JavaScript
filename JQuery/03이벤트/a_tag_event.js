$(function () {
  //[  <a href="#">메뉴1</a>, <a href="#">메뉴2</a>, <a href="#">메뉴3</a> ]
  //           0                        1                     2

  $(".menuWrap_1 a").on("click", function (event) {
    //<a>태그는 href속성에 적힌 사이트주소로 이동하는 기본이벤트가 적용되어 있기 때문에
    // 차단 하여 click했을때의 이벤트 처리코드가 실행되게 하기 위해서는
    // 매개변수 event객체의 preventDefault()메소드를 호출하여 먼저 차단 시키자
    event.preventDefault();

    //이벤트 처리할 코드 작성
    // 선택한 전체 <a>들에 배경색을 분홍색으로 설정
    $(".menuWrap_1 a").css("background-color", "pink");

    //$(this) 구문을 이용해 <a>들 중에서도 click이벤트가 발생당한 <a>요소만 선택해서 ~~~~
    // 배경색을 aqua색으로 설정
    //참고. $(this) 구문은 click이벤트가 발생한 요소를 추적해서 선택해 올수 있다.
    $(this).css("background-color", "aqua");
  });

  //[  <a href="#">메뉴4</a>, <a href="#">메뉴5</a>, <a href="#">메뉴6</a> ]
  //           0                        1                     2
  //두번째 <ul class="menuWrap_2">내부에 있는 모든 <a>요소들을 배열에 담아 선택해서 가져와
  var as = $(".menuWrap_2 a");

  as.click(function (event) {
    event.preventDefault(); //<a>들의 href기본이벤트 차단

    as.css("background-color", "green");

    //click이벤트가 등록되어 있는 <a>들을 모두 선택해서
    //click이벤트가 발생한 하나의 <a>요소의  index위치번호를 알아내자.
    var idx = as.index(this);

    //click이벤트가 등록되어 있는 <a>들을 모두 선택해서
    //click이벤트가 발생한 <a>요소에만 배경색을 파란색으로 설정
    as.eq(idx).css("background-color", "blue");

    //<p class="idxNum"></p> 선택해서 콘텐츠영역에 idx변수에 저장된 click이벤트가 발생한 <a>요소의 index위치 투입
    $(".idxNum").text(idx);
  });
});
