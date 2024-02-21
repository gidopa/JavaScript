/*
        focus()
        - 요소를 선택해서  선택한 요소에 포커스를 이동시키는 동작(이벤트)을 등록하는 메소드.

        blur()
        - 선택한 요소에서 포커스가 존재하다가 다른 요소로 이동시키는 동작(이벤트)을 등록하는 메소드.
        
        focusin()
        - 선택한 요소의 하위요소 중에서 입력요소로 포커스를 이동시키는 동작(이벤트)을 등록하는 메소드.
        
        focusout()
        - 선택한 요소의 하위요소 중에서 입력요소에 포커스가 존재하다가  외부요소로 이동시키는 동작(이벤트)을 등록하는 메소드.
        
- 전체 문법
         $("이벤트대상요소선택").focus 또는 blur 또는  focusin 또는 focusout(function(){ 이벤트처리코드;  });

         $("이벤트대상요소선택").on("focus 또는 blur 또는  focusin 또는 focusout", function(){ 이벤트처리코드; }   );

- 스크롤 막대바를 강제로 이동 시키는 이벤트 방법 의 문법
         $("이벤트대상요소선택").focus 또는 blur 또는  focusin 또는 focusout();
    */
/* 		
    //id="user_id_1"인<input>요소와   id="user_pw_1"인 <input> 입력 요소들을 다중 선택해서 
    //on메소드를 호출하여 "focus"이벤트 다중 등록 
    $("#user_id_1, #user_pw_1").on("focus", function(){
        //두개의 <input>중에서 하나라도 포커스 이벤트가 발생하면 이벤트 처리할 코드 작성 
        //포커스이벤트가 발생당한 <input>요소를 선택 -> $(this)
        $(this).css("background-color","pink");
    });
    
    //id="user_id_1"인<input>요소와   id="user_pw_1"인 <input> 입력 요소들을 다중 선택해서 
    //on메소드를 호출하여 "blur"이벤트 다중 등록 
    $("#user_id_1, #user_pw_1").on("blur", function(){
                    
        //두개의 <input>중에서 하나라도 blur 이벤트가 발생하면 이벤트 처리할 코드 작성 
        //blur이벤트가 발생당한 <input>요소를 선택 -> $(this)
        $(this).css("background-color","white");
    });
*/
$(function () {
  $("#user_id_1, #user_pw_1").on({
    focus: function () {
      $(this).css("background-color", "pink");
    },
    blur: function () {
      $(this).css("background-color", "white");
    },
  });

  //------------------------------------------------------------------------------------------------------------------------
  //2번째 <form></form>요소 를 선택해 내부에 작성된 입력요소 2개 <input>에  focusin이벤트를 등록!
  $("form:eq(1)").focusin(function () {
    //	$(this)  ->  focusin이벤트가 발생한 영역인 <form> 선택
    //방법1.
    //	$(하위요소선택,this) ->  this: focusin이벤트가 발생한 <form>요소의      하위요소를 선택해서

    //방법2.
    //	$(this).find("모든하위요소선택") ->  this: focusin이벤트가 발생한 <form>요소의  모든 자손을 포함한 하위요소를 선택해서

    //방법3.
    //	$(this).children("직계하위요소선택") ->  this: focusin이벤트가 발생한 <form>요소의 직계 하위요소만 선택해서

    // 			 console.log( $("#user_id_2",this) );

    //입력요소 2개중에 어느 하나라도  focusin이벤트가 발생하면
    //선택한  2번째 form부요소를 선택 <--- $(this) 하여  배경색을 분홍색으로 설정
    $("#user_id_2", this).focus(function () {
      $(this).css("background-color", "pink");
    });

    $("#user_pw_2", this).focus(function () {
      $(this).css("background-color", "pink");
    });

    //입력요소 2개중에 어느 하나라도  focusin이벤트가 발생하면
    //선택한  2번째 form부요소를 선택 <--- $(this) 하여  배경색을 분홍색으로 설정
    $("#user_id_2", this).blur(function () {
      $(this).css("background-color", "white");
    });

    $("#user_pw_2", this).blur(function () {
      $(this).css("background-color", "white");
    });
  });

  /* 
$("form:eq(1)").on(
                {
                  "focusin" : function(){ 
                      
                      $("#user_id_2, #user_pw_2",this).on(
                                                            {
                                                              "focus" : function(){ $(this).css("background-color","pink");   },
                                                            }
                                                            );   
                      
                  },
                  "focusout" : function(){ 
                                                
                      $("#user_id_2, #user_pw_2",this).on(
                                                            {
                                                              "blur" : function(){ $(this).css("background-color","white");   },
                                                            }
                                                          );   
                      
                  }
                }
);
*/
});
