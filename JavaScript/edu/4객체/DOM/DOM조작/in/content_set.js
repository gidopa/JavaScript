document.getElementById(
  "textContent"
).textContent = `<strong>textContent</strong> 속성`;

document.querySelector("#innerText").innerText =
  "<strong>innerText</strong> 속성";

document.getElementById("innerHTML").innerHTML =
  "<strong>innerHTML 속성</strong>";

//innerHTML로 저장하면 태그로 인식해 노드의 컨텐츠에 적용함 나머지는 전부다 text로 인식함
