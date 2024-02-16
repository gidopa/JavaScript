//주제  : $.inArray() , $.isArry() 메소드를 사용해  배열 객체의 정보를 구해 보겠습니다.
//      $.merge()메소드로는 두 배열 객체를 하나의 배열 객체로 묶습니다.

$(function () {
  var arr1 = ["서울", "대전", "부산", "전주"];
  //			 0       1      2      3
  var arr2 = ["한국", "미국", "일본", "중국"];
  //           0       1      2      3

  var obj = { name: "정부장", area: "서울" };

  //arr1배열에 저장된 찾을 "부산" 데이터를 검색하여 있으면  index 2를 반환
  var idxNum = $.inArray("부산", arr1);
  console.log(idxNum); //     2

  //arr1변수에 저장된  데이터가  배열객체 이면 true반환하고 아니면 false를 반환
  var okArray1 = $.isArray(arr1);
  console.log(okArray1); //true

  //obj변수에 저장된 데이터가 배열객체이면 true반환하고 아니면 false를 반환
  var okArray2 = $.isArray(obj);
  console.log(okArray2); //배열 객체가 아니므로 false

  //first자리에 넣은 배열에  second자리에 넣은 배열을 엮어  합칩니다.
  var arr3 = $.merge(arr2, arr1);
  console.log(arr3); //["한국", "미국", "일본", "중국, 서울", "대전", "부산", "전주"];
  console.log(arr2); //["한국", "미국", "일본", "중국, 서울", "대전", "부산", "전주"];
});
