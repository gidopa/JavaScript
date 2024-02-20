$(function () {
  //<p id="p1">내용1</p>를 선택해 오기 위해
  //#p1으로 선택해옵니다.
  var h1 = $("#p1").height(); //콘텐츠영역의 높이 50
  var w1 = $("#p1").width(); //콘텡츠 영역의 너비 100
  console.log("h1->" + h1);
  console.log("w1->" + w1);

  var h2 = $("#p1").innerHeight(); //padding영역과 콘텐츠 영역을 포함한 높이  90
  var w2 = $("#p1").innerWidth(); //padding영역과 콘텐츠 영역을 포함한 너비  140
  console.log("h2->" + h2);
  console.log("w2->" + w2);

  var h3 = $("#p1").outerHeight(); //padding영역과 콘텐츠 영역 그리고 border 영역을 포함한 높이   100
  var w3 = $("#p1").outerWidth(); //padding영역과 콘텐츠 영역을 그리고 border영역을 포함한 너비  150
  console.log("h3->" + h3);
  console.log("w3->" + w3);

  //padding여백 및 border두께를 포함한 요소의 너비값을 100으로 변경
  //padding여백 및 border두꼐를 포함한 전체 높이 값을 100으로 변경
  $("#p2").outerWidth(100).outerHeight(100);
});
