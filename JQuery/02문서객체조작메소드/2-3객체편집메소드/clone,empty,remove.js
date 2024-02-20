$(function () {
  //[ <p>내용1</p>, <p>내용2</p>  ] 복제한 p들을 배열에 담아 선택해 옵니다.
  var copyPs = $(".box1").children().clone();
  // 		console.log(copyPs);

  //append()메소드를 이용해 copyPs배열에 저장된  복제된 <p>내용1</p> <p>내용2</p>를
  //class="box3"인 세번째 <div></div>를 선택해 내부의  가장 마지막 위치에 추가 !
  $(".box3").append(copyPs);

  //class="box2"인 두번째 <div></div>를 선택해 remove()메소드를 사용해 삭제 시킵니다.
  $(".box2").remove();

  //class="box3"인 세번째 <div></div>를 선택해 하위 모든 자식 요소들을 삭제 시키기 위해 empty()메소드 사용
  $(".box3").empty();
});
