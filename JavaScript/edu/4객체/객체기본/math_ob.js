let a = 2.1234;
// Math.max 최댓값 반환    Math.min 최솟값 반환
let maxNum = Math.max(2.1234, 5, 9, 12, 321321, 23, 421);
// Math.round 소수점 첫째자리를 반올림하여 반환
let roundNum = Math.round(a);
// Math.floor 매개변수값보다 작은 가장 가까운 정수값 반환
let foolNum = Math.floor(a);
let foolNum1 = Math.floor(-2.5);
// Math.ceil 매개변수값보다 큰 가장 가까운 정수 반환
let ceilNum = Math.ceil(a);
let ceilNum1 = Math.ceil(-4.5);
// Math.random 0.0~1.0의 난수 발생
let rndNum = Math.random();

document.write("maxNum : " + maxNum + "<br>");
document.write("roundNum : " + roundNum + "<br>");
document.write("floorNum : " + foolNum + "<br>");
document.write("floorNum1 : " + foolNum1 + "<br>");
document.write("ceilNum : " + ceilNum + "<br>");
document.write("ceilNum1 : " + ceilNum1 + "<br>");
document.write("rndNum : " + rndNum + "<br>");
