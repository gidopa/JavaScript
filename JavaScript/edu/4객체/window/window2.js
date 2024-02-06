/*
    window객체
    open() 메소드 : 웹브라우저에서 새로운 창을 여는데 사용
    window.open(팝업창에띄울파일의 경로, 팝업창 제목설정, 팝업창 옵션속성설정);
*/
function popup() {
  window.open(
    "../window/popup.html",
    "팝업창제목",
    "width=200, height=100, left=400, top=400"
  );
}
