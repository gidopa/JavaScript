//<a></a> 생성
const a = document.createElement("a");
//body의 자식으로 a태그 달아버림
document.querySelector("body").appendChild(a);
//a태그에 href="http://www.naver.com" 달아줌
a.setAttribute("href", "http://www.naver.com");
//a태그의 텍스트 노드 달거 생성 -> "네이버" 생성
const b = document.createTextNode("네이버");
//a태그에 텍스트노드 달아버림
a.appendChild(b);
const c = document.createAttribute("id");
console.log("c", c);
c.value = "name이다이거야";
a.setAttributeNode(c);
