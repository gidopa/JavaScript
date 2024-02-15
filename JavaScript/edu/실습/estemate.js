function car() {
  let price = parseInt(document.getElementById("total").defaultValue);
  let optPrice = 0;
  let box = document.querySelectorAll("input[type='checkbox']");
  // querySelectorAll로 받아서 foreach 이용
  box.forEach((opt) => {
    if (opt.checked) {
      optPrice += parseInt(opt.value);
    }
  });

  // for 반복문 이용
  //   for (let i = 1; i < 4; i++) {
  //     let opt = document.getElementById(`opt${i}`);
  //     if (opt.checked) {
  //       optPrice += parseInt(opt.value);
  //     }
  //   }

  // 반복문 없이
  //   let c1 = document.getElementById("opt1");
  //   let c2 = document.getElementById("opt2");
  //   let c3 = document.getElementById("opt3");

  //   if (c1.checked) {
  //     optPrice += parseInt(c1.value);
  //   }
  //   if (c2.checked) {
  //     optPrice += parseInt(c2.value);
  //   }
  //   if (c3.checked) {
  //     optPrice += parseInt(c3.value);
  //   }

  document.getElementById("total").value = price + optPrice;
}
