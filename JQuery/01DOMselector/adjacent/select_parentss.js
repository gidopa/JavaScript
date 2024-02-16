$(function () {
  /*
        상위요소 선택자  parents()란?
        - 의미 : 선택한 요소를 기준으로 모든 상위요소를 선택하거나  상위요소 중 선택하고자 하는 상위요소만 선택
        - 문법
                문법1.
                        $("기준요소선택").parents()
                        의미 : 선택한 요소를 기준으로 상위요소를 모두 선택합니다.
                문법2. 
                        $("기준요소선택").parents("선택하고자하는 상위요소선택")
                        의미 : 선택한 요소를 기준으로 상위요소 중 선택하고자 하는 상위요소만 선택 합니다. 
    
    */

  //<p class="txt1">내용</p>기준요소 선택 해오고  이요소를 기준으로 해서 전체 상위요소를 선택 해 옵니다.
  $(".txt1").parents().css("border", "2px dashed red");

  //<p class="txt2">내용<p>기준요소 선택해 오소  이요소를 기준으로 해서  parents() <- 상위요소선택자 에 작성한
  //div 상위요소만 최종 선택해 옵니다.
  $(".txt2").parents("div").css("border", "4px dotted blue");
});
