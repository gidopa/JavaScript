function calcArea(rad) {
  return rad * rad * 3.14;
}

function getMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function BMI(height, weight) {
  let heightMeter = height / 100;
  let bmi = weight / (heightMeter * heightMeter);
  if (bmi >= 26) {
    return `비만, bmi = ${bmi}`;
  } else if (bmi >= 24 && bmi < 26) {
    return `과체중, , bmi = ${bmi}`;
  } else if (bmi >= 18.5 && bmi < 24) {
    return `정상, , bmi = ${bmi}`;
  } else if (bmi < 18.5) {
    return `저체중, , bmi = ${bmi}`;
  }
}
let bmi = BMI(180, 70);
console.log("bmi", bmi);
bmi = BMI(150, 77);
console.log("bmi", bmi);
