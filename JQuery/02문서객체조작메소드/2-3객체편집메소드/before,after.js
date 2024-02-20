$(function () {
  //1. #wrap  ->  <div>...</div>한쌍을 선택
  //2. #wrap p -> [ <p>내용1</p> , <p>내용2</p>, <p>내용3</p> ]배열 선택
  //					0                 1          2
  //3. #wrap p:eq(2) -> 2 index위치에 저장된 <p>내용3</p>요소만 최종 선택해 옵니다.

  //4.$("#wrap p:eq(2)").after("<p>After</p>");
  //  -> <p>내용3</p>.after("<p>After</p>"); 메소드를 이용해    <p>내용3</p>뒤에 새요소인 <p>After<p>를 동적으로 추가
  $("#wrap p:eq(2)").after("<p>After</p>");

  //선택한 요소 다음에  새요소를 생성하여 추가 합니다.
  $("<p>insertAfter</p>").insertAfter("#wrap p:eq(1)");

  //<p>내용2</p>를 선택해
  //befor메소드에 새요소인 <p>Before</p>를 생성하여
  //선택한 <p>내용2</p> 이전에 추가 합니다.
  $("p").eq(1).before("<p>Before</p>");

  //insertBefore메소드로 선택한 <p>내용1</p>이전 위치에   앞에 작성한  <p>inssertBefore</p>새요소를 생성해서 추가
  $("<p>insertBefore</p>").insertBefore("p:eq(0)");
});
