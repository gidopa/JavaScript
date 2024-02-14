/*
    max변수의 출력값이 배열 중 가장 큰 숫자가 될 수 있도록 getArrayNum() 함수를 완성
    이떄 배열은 반드시 숫자형이라고 가정
*/

function getArrayMaxNum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let maxNum = getArrayMaxNum([10, 30, 50, 60, 70]);
console.log("max", maxNum);

function getArrayMaxNum1(arr) {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      max = arr[i];
    } else {
      max = arr[i + 1];
    }
  }
  return max;
}

let max = getArrayMaxNum1([10, 30, 50, 70, 60, 80]);
console.log("max", max);
