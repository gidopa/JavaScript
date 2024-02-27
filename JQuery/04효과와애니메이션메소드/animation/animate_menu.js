let duration = 250;
let $submenu = $("this").find(".submenu").stop(true, true);
$(".menu-with-submenu").on("mouseenter", function () {
  //stop(boolean, boolean)
  //첫번째 매개변수는 true를 전달하면 현재 요소의 애니메이션 관련 메소드를 보유 중인
  //큐 저장소에서 모두 제거함
  //두번째 boolean은 현재 실행중인 애니메이션 동작이 완료된 상태로 변경 합니다.
  $submenu.slideDown(duration);
});

$(".menu-with-submenu").on("mouseleave", function () {
  $submenu.slideUp(duration);
});
