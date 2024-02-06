//숫자 객체 생성 방법
//숫자를 변수에 저장시키면 됩니다.
let a = 3.456789;
let b = 700000;
let c = "30.5px"; // 숫자객체가 아니고 String임
let d = 40;
//b.toExponential(n) 저장된 값을 지정한 고정 소수점 자리만큼 지수표기법으로 값 반환
//7.0 * 10e+5 지수표기법
document.write(b.toExponential(1) + "<br>");
//.toFixed(n) 저장된 값을 지정한 고정 소수점 자리만큼만 반올림하여 표기
//a.toFixed(2) -> 소수점 셋째자리에서 반올림해 소수점 둘째자리까지 표기
document.write(a.toFixed(2) + "<br>");
//문자열로 변경 -> toString()
document.write(typeof a.toString() + "<br>");
//num4.valueOf 저장된 값을 반환한다
document.write(typeof d.valueOf() + "<br>");
//parseInt() -> 해당부분에서 정수부분만 남아 반환
document.write(parseInt(c) + "<br>");
document.write(parseFloat(c) + "<br>");
document.write(parseInt(c) + d + "<br>");
