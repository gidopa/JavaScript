function printInfo() {
  document.write(`웹 브라우저의 너비: ${window.innerWidth}` + "<br>");
  document.write("웹 브라우저의 높이: " + window.innerHeight + "<br>");
  document.write("웹 브라우저창의 너비 :" + window.outerWidth + "<br>");
  document.write("웹 브라우저창의 높이 :" + window.outerHeight + "<br>");
  document.write(
    "웹 브라우저창 위쪽 면과 모니터 사이의 간격 :" +
      window.screenTop +
      ", " +
      window.screenY +
      "<br>"
  );
  document.write(
    "웹 브라우저 창 왼쪽 면과 모니터 사이의 간격 : " +
      window.screenLeft +
      ", " +
      window.screenX +
      "<br>"
  );
  document.write(
    "웹 브라우저 창의 스크롤 막대바가 위치한 가로 위치값 : " +
      window.scrollX +
      "<br>"
  );
  document.write(
    "웹 브라우저 창의 스크롤 막대바가 위치한 세로 위치값 : " +
      window.scrollY +
      "<br>"
  );
}
