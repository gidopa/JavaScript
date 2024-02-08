/*
    document객체의 메소드를 이용해 요소노드(HTML 태그)에 적힌 속성노드 조작
    1. 요소노드.getAttribute("속성명") -> 속성값을 리턴해줌
    2. 요소노드.setAttribute("설정 할 속성명","설정 할 속성값")
    3. 요소노드.removeAttribute("속성명") -> 해당 속성을 삭제함 
*/
const a = document.getElementsByTagName("a")[0];
const url = a.getAttribute("href");
console.log("url", url);

const aEL = document.querySelector("a");
const href = aEL.getAttribute("href");
console.log("href", href);

console.log(
  'document.getElementById("hi")etAttribute("id")',
  document.getElementById("hi").getAttribute("id")
);

console.log(
  'document.querySelector("h1").getAttribute("id")',
  document.querySelector("h1").getAttribute("id")
);

document.querySelector(`p`).setAttribute("id", "어렵누");
document.getElementsByClassName("p1")[0].setAttribute("id", "응바꿈");

document.querySelector("p").removeAttribute("id");

document.querySelector("a").innerText = `구글`;
