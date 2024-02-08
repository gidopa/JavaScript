/*
    classList속성으로 class속성값을 조작하면 기존 요소가 가지던 class속성값을 보존하면서 추가하거나 삭제함
    setAttribute는 원래있던 속성위에 덮어씌워버림 -> setAttribute 한 속성값만 존재하고 나머지는 지워진다
*/
const a = document.querySelector("a");
a.classList.add("red-color");
