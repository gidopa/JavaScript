/*
    document객체에 만들어져 있는 메소드
    1. getElementById(요소노드의 id속성에 부여한값)
    - 요소노드의 부여한 id속성값과 같은 id속성값을 가지는 요소노드 선택해 반환
    2. getElementsByTagName(TagName)
    - 요소의 태그명이 TagName과 같은 모든 요소들을 전부 선택해 배열로 반환
    3. getElementsByClassName("요소노드의 class속성에 부여한 값")
    - 매개변수로 전달한 값과 class에 부여한 속성이 같은 모든 요소를 배열에 담아 반환
*/
const el = document.getElementById("title");
console.log(el);
console.log("document.getElementById", document.getElementById("title"));
//class 속성에 부여한값이 text와 일치하는 모든 요소들을 선택해 배열로 반환
console.log(
  "document.getElementsByClassName",
  document.getElementsByClassName("text")
);
console.log(
  'document.getElementsByClassName("text")[1]',
  document.getElementsByClassName("text")[1]
);
//파라미터로 전달한 태그와 같은 태그를 전부 배열로 반환
console.log(
  "document.getElementsByTagName",
  document.getElementsByTagName("p")
);
