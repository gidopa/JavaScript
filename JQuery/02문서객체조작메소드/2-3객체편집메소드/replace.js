$(function () {
  //h2요소들 2쌍을 선택해서 가져와 뒤에 작성한 <h3>으로 모두 바꾼다.
  $("h2").replaceWith("<h3>replaceWith</h3>");

  //바꿀 새요소 p를 생성하여 뒤에 작성해서 선택한 <div>요소들을 모두 바꾼다.
  $("<p>Change</p>").replaceAll("div");
});
