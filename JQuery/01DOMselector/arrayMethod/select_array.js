$(function () {
  var obj = [{ area: "서울" }, { area: "부산" }, { area: "전주" }];
  //				          0        ,       1       ,       2            index

  //위 obj배열 전체를 선택해서 가져오는데...
  //obj배열에 저장된  {}객체들의 갯수만큼  반복해서
  //각 객체{}의 정보들을 얻어서 사용함
  //function의 첫번째 매개변수 i자리에는  첫 index 0부터 넘겨 받고   두번째 매개변수 element자리에는  {"area":"서울"}객체를매개변수로 받아 사용함
  //사용이 끝나면
  //function의 첫번째 매개변수 i자리에는  두번째 index 1부터 넘겨 받고   두번째 매개변수 element자리에는  {"area":"부산"}객체를매개변수로 받아 사용함
  //사용이 끝나면 마지막으로
  //function의 첫번쨰 매개변수 i자리에도 마찬가지로 index 3 넘겨 받고 두번째 매개변수 element자리에는  {"area":"전주"}객체를매개변수로 받아 사용함
  //더이상 obj배열에 저장된 {}객체가 없으면  each메소드의 실행을 끝냅니다.
  $(obj).each(function (i, element) {
    console.log(i + "  index = ", element);
  });

  console.log("==== The End 1 ====");

  //$("#menu2 li")
  //[   <li>내용2-1</li>,    <li>내용2-2</li>,     <li>내용2-3</li>   ]
  //         0                       1                   2                index
  //$.each메소드를 호출하면    DOM요소를 배열에 담아 선택해 와서   배열에 담긴  DOM요소들을 반복해서 사용 할수 있다.
  $.each($("#menu2 li"), function (i, elt) {
    console.log(i + ":", elt);
  });

  console.log("==== The End 2 ====");

  $.each($("#menu2 li"), function (i) {
    //현재 반복되는 배열의 index위치의 문서객체를 선택 할때  $(this)
    console.log(i + ":", $(this));
  });
});
