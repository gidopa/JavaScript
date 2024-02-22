$(function () {
  //<select>요소를 선택해서  다른 option을 선택하는 동작(이벤트)를 등록하기 위해 change메소드 호출!
  $("#rel_site").change(function () {
    //class="txt"인 <p>요소를 선택해서 가져와
    //<p>콘텐츠영역</p>의 콘텐츠 영역에  선택한 <option>요소(이벤트가 발생한 요소 $(this))의
    // value속성에 설정된 값을 얻어 넣는다.

    var selectedOption = $(this).val();
    $(".txt").text(selectedOption);
  });

  //아래의 <select id="rel">....</select>선택해서
  //.val("값")메소드를 이용해  값이 e인 <option>을 선택하고
  //강제로 선택한 상태의 화면을 보여주기 위해 change()메소드 호출!
  $("#rel").val("e").change();
});
