$(function () {
  //	<p class="txt_1">절대 top위칫값: <span></span></p> 내부에 있는 <span></span>선택
  var $txt1 = $(".txt_1 span"),
    //  	<p class="txt_2">상대 top위칫값: <span></span></p> 내부에 있는 <span></span>선택
    $txt2 = $(".txt_2 span"),
    //   <p class="box">박스</p> 선택
    $box = $(".box");

  //전체 문서 화면을 기준으로  <p class="box">박스</p>요소의 y축방향으로 얼마만큼 위치 해  있는지의 top의 값을 얻는다.
  var off_t = $box.offset().top;
  console.log(off_t); //100

  $txt1.text(off_t);

  //감싸고 있는 <p>를 기준으로  <p class="box">박스</p>요소의 y축방향으로 얼마만큼 위치 해 있는지의 top의 값을 얻는다.
  var pos_t = $box.position().top; //50
  console.log(pos_t);

  $txt2.text(pos_t);
});
