// 종속선택자를 이용해 요소의 속성의 값이 일치하는 요소를 선택
/*
    $('요소명#id') $('요소명.class')
*/
$(function () {
  $("h1.tit").css("color", "yellow");
  //   $("h2#a").css("color", "red");
});
document.getElementsByTagName("h2")[0].style.color = "red";
document.getElementById('a').style.color = 'aqua';
