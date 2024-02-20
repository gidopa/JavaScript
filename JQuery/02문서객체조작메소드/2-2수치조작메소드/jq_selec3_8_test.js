$(function () {
  var topNum = $("h1").offset().top;
  console.log(topNum); //2000

  //웹브라우저 윈도우창을 선택해서  scrollTop(2000); 메소드를 호출하면
  //스크롤 막대바가 입력한 수치만큼 수직 방향 으로 이동됩니다.
  $(window).scrollTop(topNum);

  //scrollTop()메소드에 수치를 넣지 않고 바로 호출하면
  //스크롤 막대바가  수직 아래 방향으로 이동한 위치 값 2000을 얻을수 있다.
  var sct = $(window).scrollTop();
  console.log(sct);
});
