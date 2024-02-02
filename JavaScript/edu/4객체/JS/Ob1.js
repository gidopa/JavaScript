let tv = new Object();
//생성된 tc 객체에 width, height, witght, color 속성을 만들어 추가
tv.width = "30cm";
tv.height = "25cm";
tv.weight = "20kg";
tv.color = "White";

tv.off = function () {
  document.write("전원 off" + "<br>");
};
document.write(tv.width + "<br>");
document.write(tv.height + "<br>");
document.write(tv.weight + "<br>");
document.write(tv.color + "<br>");
tv.off(); // tv객체 메모리 내부에 만들어져 있는 off 메소드 호출
