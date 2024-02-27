/*
    sideDowon() : 숨겨져 있던 요소가 밑으로 펼쳐지며 노출됩니다.
			slideUp() : 노출되어 있던 요소를 위로 접으며 숨깁니다.
			slideToggle() : 숨겨져 있던 요소는 아래로 펼쳐지며 노출되고, 
            노출되어 있던 요소는 위로 접으면서 숨깁니다.
*/
let h1 = $("h1");
$("button:first").on("click", function () {
  h1.slideUp(1000);
});
$("button:eq(1)").click(function () {
  h1.slideDown(1000);
});
$("#btn3").click(() => {
  h1.slideToggle(1000);
});
