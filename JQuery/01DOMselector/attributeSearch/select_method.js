$(function(){
		
    //[ <p>내용1</p>,  <p style="disply:none;">내용2</p>  ]
    //     0                            1
    var result_1 = $("#inner_1 p");
    
    //<p>내용1</p>선택해 이요소가 눈에 보이냐 라고 상태를 물어 볼때  is(":visible") 메소드를 호출하여
    //눈에 보이면 true반환 , 눈에 안보이면 false를 반환 하게 됩니다. 
    var result_1_1 = result_1.eq(0).is(":visible");
    
    console.log(result_1_1); //true
    
    
    console.log(  $("#inner_1 p:eq(1)").is(":visible") ); // 눈에 보이지 않으므로 false
    
    
// 		//체크1 checkbox 체크된 상태 이면 true 반환 하므로 조건식에 만족 합니다. 
// 		if( $("#chk1").is(":checked") ){
        
// 			//<h2>폼 태그영역</h1>를 선택해서 배경색을 분홍색으로 적용 
// 			$("#inner_2 h2").css("background-color","pink");
    
// 		//체크2 checkbox 체크된 상태이면 ?
// 		}else if( $("#chk2").is(":checked") ){
        
// 			$("#inner_2 h2").css("background-color","blue");

// 		}	
    
    //아래의 2개의 체크 박스를 배열에 담아 선택해오고 
    //2개의 체크박스 중 하나라도 체크가 되어 있는 상태이면?
    //<h2>폼 태그 영역</h2>영역을 선택해 배경색을 pink로 설정 
    
    //$("input[type=checkbox]")
    //-> [<input type="checkbox" name="chk1" id="chk1" checked>, <input type="checkbox" name="chk2" id="chk2"> ]
    //                               0                                                  1
    
    
    $("input[type=checkbox]").each(function(idx, elem) {
        
         if($(elem).is(":checked")){
             $("#inner_2 h2").css("background-color","pink");
         }
        
    });
    
});