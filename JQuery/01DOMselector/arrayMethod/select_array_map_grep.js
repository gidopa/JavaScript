$(function () {
  var arr1 = [
    { area: "서울", name: "무대리" },
    { area: "부산", name: "홍과장" },
    { area: "대전", name: "박사장" },
    { area: "서울", name: "빅마마" },
  ];
  //         0                                  1                               2                        3
  //arr1배열에 저장된 객체 수만큼 콜백functon을 반복 실행하게 합니다.
  var arr2 = $.map(arr1, function (elem, index) {
    //elem매개변수에는   arr1배열에 저장된 { }객체의 갯수만큼 반복해서 차례대로(index0부터 ~ 3의 객체)전달받습니다.
    //전달받은 {"속성명1:"속성값"}  객체의 "속성값"을 꺼내 와서 얻으려면?    객체명.속성명1 을 작성하면  속성명1에 저장된  "속성값"을 얻을수 있음
    // elem.area    객체.속성명     ->  "서울"

    if (elem.area == "서울") {
      return elem; //[ {"area":"서울", "name":"무대리"},  {"area":"서울", "name":"빅마마"}  ]
    }
  });
  // das?
  console.log(arr2); //새롭게 가공된 배열 출력!

  console.log("======== first End ========");

  //	var arr1 = [{"area":"서울", "name":"무대리"},{"area":"부산", "name":"홍과장"},{"area":"대전", "name":"박사장"},{"area":"서울", "name":"빅마마"}];
  //         0                                  1                               2                        3

  //arr1배열에 저장된 {}객체 수만큼 function실행됩니다.
  var arr3 = $.grep(arr1, function (elem, index) {
    //{}객체 내부에  area속성의 값이 "서울"을 포함하고 있다면?
    if (elem.area == "서울") {
      return true;
    } else {
      return false;
    }
  });

  console.log(arr3);
  console.log("======== Second End========");
});
