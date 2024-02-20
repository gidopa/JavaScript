$(function () {
  //   $("#myList li:gt(0)").css("background-color", "yellow");
  // li 태그중에서 첫번째 자식을 제외한 다른 모든 자식 선택
  $("#myList li").not(":first").css("background-color", "yellow");
  //"#myList li:not(:first)").css("background-color", "yellow");
});
