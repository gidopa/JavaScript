$(function () {
  $(document).on("keydown", keyEventFnc);

  function keyEventFnc(event) {
    var direct = "";

    switch (event.keyCode) {
      case 37: //키보드의  <- 방향키를 눌렀다면
        direct = "LEFT";
        break;

      case 38: //키보드의  ^ 방향키를 눌렀다면
        //       |

        direct = "TOP";
        break;

      case 39: //키보드의  -> 방향키를 눌렀다면
        direct = "RIGHT";
        break;
      //      |
      case 40: //키보드의 v 방향 키를 눌렀다면
        direct = "BOTTOM";
        break;

      default: //키보드의 방향키 이외에 다른 키를 눌렀다면
        break;
    } //switch

    //키보드의 방향키를 눌렀다면?
    if (direct) {
      //<input type="text" name="user_id" id="user_id"> 선택해서
      // value속성에  누른 키에 대응 되는 문자열 설정
      $("#user_id").val(direct);
    }
  }
});
