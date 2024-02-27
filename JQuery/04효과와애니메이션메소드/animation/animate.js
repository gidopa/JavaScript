/*
    animate() 메소드
    선택한 요소에 다양한 동작을 적용하는 메소드
    가령, 요소를 앞으로 전진 시키거나 점점 커지게 만든다거나 점점 작아지게 만드는 등
    다양한 동작을 적용할 수 있다
    $("요소").animate({에니메이션관련css속성 : 설정값}, 동작속도, 콜백함수)
    애니메이션으로 적용할 속성을 css문법을 이용해 입력하고
    동작소도는 애니메이션을 처리하는 속도 slow, normal, fast, 밀리초 단위
*/
//h1요소에 5초동안 왼쪽 바깥 여백을 250px 줌
$("h1").animate({ marginLeft: "250px" }, 5000, function () {
  alert("h1 도착완료");
});
$("h2").animate({ marginLeft: "250px", width: "150px", opacity: 0.3 }, 5000);
$("h3")
  .animate({ marginLeft: "250px" }, 3000)
  .animate({ marginLeft: "150px" }, 2000)
  .animate({ marginTop: "250px" }, 2000);
