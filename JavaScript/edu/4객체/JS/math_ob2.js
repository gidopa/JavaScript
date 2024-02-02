// switch선택문을 사용해 client가 입력한 가위 바위 보 중 하나를 숫자로 변환시킨 후에
// 변수 tNum에 저장 만일, client가 가위 바위 보가 아닌 다른 값을 입력하면
// js의 window의 alert("경고한다"); 화면에 띄움
// 마지막으로 location객체의 reload()메소드를 호출해 웹브라우저의 F5하게 하자
// 다시 입력 받을 수 있는 prompt를 띄워 주자
document.write(
  "<h1>컴퓨터가 랜덤으로 내는 가위바위보 중 하나 맞추기</h1>" + "<br>"
);
let t = prompt("가위바위보 중에서 하나 입력하세요", "가위");
let tNum; // 가위 입력시 -> 1 저장
// 바위 입력시 -> 2 저장
// 보 입력시 -> 3 저장
switch (t) {
  case "가위":
    tNum = 1;
    break;
  case "바위":
    tNum = 2;
    break;
  case "보":
    tNum = 3;
    break;
  default:
    alert("잘못 작성하셨습니다");
    location.reload();
    break;
}
let ans = Math.floor(Math.random() * 3 + 1);
if (ans === tNum) {
  document.write("정답 !!" + "<br>");
} else {
  document.write("틀렸습니다 !!" + "<br>");
}
document.write("정답은 :" + "<br>");
document.write(
  "<img src='/JavaScript/edu/4객체/images/math_img_" +
    ans +
    ".jpg' alt=`가위바위보`>" +
    "<br>"
);
