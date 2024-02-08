/*
    js로도 css속성을 조작해 스타일 적용할 수 있음
    선택한 요소 노드에 class속성을 지정할때는 classList속성의 add(), remove(), toggle()메소드 제공
    문법
        요소노드선택.classList.add("class속성값") 추가
        요소노드선택.classList.remove("class속성값")  삭제
        요소노드선택.classList.toggle("class속성값") 추가와 삭제 반복

    js의 classList속성을 이용해 class속성 조작
*/
const pEL = document.querySelector("#text");
pEL.classList.add("red-color", "fz20");
pEL.classList.remove("red-color", "fz20");
setInterval(() => {
  pEL.classList.toggle("red-color");
}, 1000);
