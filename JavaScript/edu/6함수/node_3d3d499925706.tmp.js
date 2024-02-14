/*
    max변수의 출력값이 배열 중 가장 큰 숫자가 될 수 있도록 getArrayNum() 함수를 완성
    이떄 배열은 반드시 숫자형이라고 가정
*/

function getArrayMaxNum(arr) {
  for (let i = 0; arr.length; i++) {
    let max = 0;
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}

const maxNum = getArrayMaxNum([10, 50, 30]);
console.log("max", maxNum);
