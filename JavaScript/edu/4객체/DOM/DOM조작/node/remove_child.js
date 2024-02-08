/*
    노드 삭제하기
    - removeChild() - 부모노드와 연결된 자식노드들을 삭제
    부모노드.removeChild(삭제할자식노드선택)
*/
const pEl = document.querySelector("p");
//pEl의 부모노드를 선택하고 다시 그 자식인 pEl를 삭제한다
pEl.parentNode.removeChild(pEl);

/*
    DOM트리를 순회하며 a태그에 해당하는 요소노드를 모두 삭제
*/
const childNodes = document.body.childNodes;
childNodes.forEach(function (node) {
  if (node.nodeName.toLowerCase() === "a") {
    node.parentNode.removeChild(node);
  }
});
