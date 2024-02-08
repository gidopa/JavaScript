/*
    getAttribute와 setAttribute는 모든 속성의 상위 메소드라서 classList속성이나 dataset속성으로 하는 조작을 전부 할 수 있음
*/

const a = document.querySelector("a");
a.setAttribute("data-link", "네이버2");
a.setAttribute("class", "url");
a.setAttribute("class", "red-color");
