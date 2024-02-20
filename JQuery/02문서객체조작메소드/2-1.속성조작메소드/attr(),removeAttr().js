/*
    선택한 요소에 attr메소드를 이용해 지정한 속성에 설정된 값을 반환
    $("요소선택").attr("속성명");

    요소를 선택해 attr메소드를 이용해 속성값 변경
    $("요소선택").attr("속성명", "변경할 값")
    $("요소선택").attr({"속성명1":"설정값", "속성명2":"설정값"}) - 다수의 속성 변경

    removeAttr()
    요소를 선택해 기존의 적혀 있던 특정 속성을 삭제할때 사용하는 메소드
    $("요소선택").removeAttr("삭제할속성명")
    $("요소선택").removeAttr("삭제할속성명").removeAttr("삭제할속성명") 다중삭제시
*/
$(function () {
  let srcVal = $("img[alt='가위']").attr("src");
  console.log("srcVal", srcVal);
  $("#sec_1 img").attr("src", "images/image.png");
  $("#sec_1 img").attr({ src: "images/img.jpg", border: "3px" });
  $("#sec_1 h2").attr("id", "h2");
  $("#sec_1 h2").removeAttr("id");
  $("#text").attr("class", "dsfa");
});
