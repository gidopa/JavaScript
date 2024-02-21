/*
    단독이벤트 등록 메소드 종류 중 로딩이벤트 등록 메소드 2개 ready,load

    ready()
    사용자가 get요청 날리면 요청한 HTML 문서 내부에 있는 모든 HTML태그(DOM)을
    웹브라우저가 읽어들인 동작(이벤트)를 등록하는 메소드
    $(document).ready(function(){
        이벤트처리코드
    });
    $(document).on("ready",function(){
        이벤트처리코드
    })
    $(function(){});
    Jquery(document).ready(function(){
        이벤트처리코드
    })
*/
$(document).on("ready", function () {
  console.log($("img").height()); // 이미지를 외부에서 불러오면 사이즈가 0으로 나옴
});
/*
    load()
    외부의 문서를 웹브라우저가 읽어들이는 동작을 window객체에 등록하는 메소드
    -문법
        $(window).load(function(){ 이벤트 처리 코드 })
        $(window).on("load",function(){
            이벤트 처리 코드;
        })
*/
$(window).on("load", function () {
  console.log($("img").height());
});
