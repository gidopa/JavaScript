//텍스트필드에 입력한 값을 동적으로 화면에 추가하여 표시
function newRegister() {
  var subject = document.querySelector("#subject");
  //추가할 내용을 출력해줄 li태그 생성
  var newItem = document.createElement("li");
  var newText = document.createTextNode(subject.value);
  //li 밑으로 텍스트 노드를 달아줌
  newItem.appendChild(newText);
  var ulNode = document.querySelector("#itemlist");
  ulNode.appendChild(newItem);
  subject.value = "";
}
