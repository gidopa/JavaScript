$(function(){
    //id속성의 값이 inner_1인  첫번째 <section>영역을 선택해서 
    //<section>영역의 하위 p요소들을 모두 선택해오는데
    //p요소들 중에서도 내용1 텍스트노드를 가진  첫번째 작성된 <p>최종선택
    $("#inner_1 p:contains(내용1)").css({"background-color":"aqua"});  
    
    
    //id속성값이 outer_wrap인 <div>요소를 선택해오고 
    //<div> 안에 작성된 1단계 자식요소들을 최종 선택해 옵니다. 
    $("#outer_wrap").contents().css({"border":"1px dashed red"});
    
    
    //id속성값이 inner_1인 첫번째 <section>을 선택해오고 
    //그 하위 <p>요소들을 모두 선택해 오는데
    //<p>요소들 중에서도  strong태그를 포함 하고 있는 <p>요소들만 최종선택
    //$("#inner_1 p:has(strong)").css({"background-color":"red"});  
    $("#inner_1 p").has("strong").css({"background-color":"red"});
    
    
    //두번쨰 <section></section>요소를 선택해  내부에 작성된 모든 <p>들 중에서도  첫번째 <p>를 제외한 나머지 두번쨰 ,세번째 <p>들을 최종선택
    //$("#inner_2 p").not(":first").css({"background-color":"yellow"});
    //$("#inner_2 p").not($("#inner_2 p:contains(내용4)")).css({"background-color":"yellow"});
      $("#inner_2 p:not(:first)").css({"background-color":"yellow"});
      
      //id속성값이 inner_2인 두번째 <section>요소를 선택해오고 
      //<section>요소의 하위 <p>요소들을 배열에 담아 선택해 오는데
      //[<p>내용4</p>, <p>내용5</p>, <p>내용6</p> ] 배열 
      //     0             1            2
      //2 index위치에 저장된 <p>내용6</p>를 최종 선택하는데
      //end()선택자를 추가로 작성 하면  eq(2)선택자로 선택되지 않고 
      //$("#inner_2 p")로 모든  <p>들을 배열에 담아서 선택해 오는 부분만 적용 되어  모든<p>내부의 글자색이 그린으로 설정 된다.
      $("#inner_2 p").eq(2).end().css("color","green");
      
       
      
});