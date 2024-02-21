/*
    a, form태그에 기본 click이벤트 차단
    a태그에 click이벤트가 발생할때마다 href의 url로 넘어감 -> 
    넘어가면 이벤트 처리함수가 의미가 있냐  그래서 처리하려면 기본 클릭이벤트 기능를 차단해야함 
    1. return false;를 function내부에 작성해서 href속성의 이벤트 차단 
    2. event.preventDefault();   
*/
$(function () {
  $(".btn1").on("click", function () {
    $(".txt1").css("color", "red");
    return false;
  });

  $(".btn2").on("click", function (event) {
    event.preventDefault();
    $(".txt2").css("color", "red");
  });
});
