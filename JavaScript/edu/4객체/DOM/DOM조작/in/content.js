// 브라우저창에 노출되는 텍스트들만 반환
console.log(
  'document.getElementById("title").innerText',
  document.getElementById("title").innerText
);
// .innerHTML 선택한 태그안의 태그들 까지 전부다 반환
console.log(
  'document.getElementById("title").innerHTML',
  document.getElementById("title").innerHTML
);
// .textContent 태그 다빼고 텍스트들 전부 반환
console.log(
  'document.getElementById("title").textContent',
  document.getElementById("title").textContent
);

/*
    요소 노드의 콘텐츠 조작 속성
        속성                    설명
        textContent             선택한 요소노드의 하위 모든 텍스트노드를 선택해옴
        innerText               선택한 요소노드의 하위 텍스트중 브라우저창에 표시되는 텍스트 노드들을 선택해옴
        innerHTML               선택한 요소노드의 하위 모든 노드들을 선택해 옵니다.(HTML태그 포함)

*/
