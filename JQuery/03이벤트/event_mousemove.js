/*
            mousemove() 
             - 마우스 포인터를 사이트 이용자가 이동시키는 동작(이벤트)을  문서객체(document)에 등록하는 메소드 
             - 문법
                     $(document).mousemove(function(event){
                         
                         //마우스포인터를 이동시키는 이벤트를 하면 처리할 코드 작성 
                         
                         
                     });
        
             참고.  위 문법의 function의 매개변수 event로 전달 받는 객체는  마우스포인터가 현재 위치한 정보를 제공하는
                  clientX, clientY, pageX, pageY 이런 속성들을 만들어 놓았기때문에 호출해서 정보를 얻을수 있습니다.
                    263page표 참고!
    */
$(function () {
  //마우스 포인터가 이동되었을떄~~ function이벤트핸들러 함수가 호출됨
  $(document).mousemove(function (event) {
    //<span class="posX">0</span> 선택해서
    //매개변수로 전달 받는 event객체의 pageX속성을 호출하면
    //스크롤 X축의 이동한 거리 를 계산하여 마우스 포인터가 현재 위치한  X좌푯값을 반환합니다.
    //반환받은 X좌푯값을 .text()메소드를이용해    0 대신 설정 합니다.
    $(".posX").text(event.pageX);

    //<span class="posY">0</span> 선택해서
    // 0대신에  현재  마우스 포인터가 위치한 좌푯값을 얻어   0대신에 설정!
    $(".posY").text(event.pageY);
  });
});
