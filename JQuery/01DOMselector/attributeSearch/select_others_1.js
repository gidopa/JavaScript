$(function(){
		
    //id속성값이 inner_1인  첫번쨰 <section>을 선택해오고
    //<section>내부에 있는  class속성값이 txt1인 하위<p>요소를 최종선택.
     $("#inner_1").find(".txt1").css("background-color","aqua");

    //id속성값이 inner_1인 첫번째 <section>을 선택해오고 
    //<section>내부에 있는 하위 <p>를 모두 선택해 오는데
    //<p>들 중에서도  class속성값이 txt2인 <p>요소만 최종 선택.
    $("#inner_1 p").filter(".txt2").css("background-color","blue");
    
    //id속성값이 inner_2인 두번째 <section>을 선택해  그하위 모든 p를 선택해오는데...
    //선택한 p들의 갯수만큼 익명함수function이 호출되어 실행되게  filter()선택자를 이용하자.
    //[<p>index 0</p>, <p>index 1</p>, <p>index 2</p>, <p>index 3</p>] 배열 
    //       0               1               2                 3
    //filter선택자 내부의function을 사용해    return idx % 2 == 0 조건식의 결과가 true가 되는 <p>들만 최종 새 배열에 담아서 선택해 옴
    //그러므로 [<p>index 0</p> , <p>index 2</p>] 최종 선택
    
    $("#inner_2 p").filter(function(idx,obj){
        
        console.log(idx);
        
        return idx % 2 == 0;
        
    }).css("background-color","pink");
    
    
});