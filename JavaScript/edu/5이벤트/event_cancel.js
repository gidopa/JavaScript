/*
    html 태그 중 일부는 기본으로 이벤트가 적용되어 있는데 대표적으로는 a태그 , form태그
    a태그는 생성된 요소를 클릭하면 다른 페이지에 get요청 때리는 클릭 이벤트
    form태그는 form 내부에서 버튼을 누르면 서버페이지로 전송해주는 이벤트 
    그런데 preventDefault()메소드를 사용하면 태그에 기본으로 연결된 이벤트를 취소할 수 있음

*/
const a = document.querySelectorAll("a");
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function (event) {
    event.preventDefault();
  });
}
