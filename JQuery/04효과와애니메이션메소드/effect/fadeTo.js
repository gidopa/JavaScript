/*
    fadeTo()
    선택한 요소가 노출되어 있으면 요소에 투명도를 설정해 지정한 만큼 숨기는 효과
    투명도 값을 0.0~1.0 사이의 값을 지정해주며 1은 선명하게 보이고 0은 아예 투명함
    faedTo("효과속도", 투명도값)
*/
// $("#btn1").on("click", function () {
//   $("h1").fadeTo(1000, 0.3);
// });
// $("#btn2").on("click", function () {
//   $("h1").fadeTo(1000, 1);
// });
$(document).on("click", "button", function () {
  let id = $(this).attr("id");
  if (id === "btn1") {
    $("h1").fadeTo(1000, 0.3);
  } else {
    $("h1").fadeTo(1000, 1);
  }
});
