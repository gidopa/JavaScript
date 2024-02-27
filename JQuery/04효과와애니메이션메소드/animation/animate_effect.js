/*
    stop()
    현재 애니메이션을 모두 정지 시키는 메소드
    $("요소선택").stop()

    delay()
    선택한 요소에 애니메이션을 설정한 지연시간 만큼 지연
    $("요소선택").delay(지연시간).animate()....
*/
$("h1").animate({ marginLeft: "250px" }, 3000);
$("h2").delay(1000).animate({ marginLeft: "250px" }, 3000);
$("#btn1").on("click", function () {
  $("h1").stop();
  $("h2").stop();
});
