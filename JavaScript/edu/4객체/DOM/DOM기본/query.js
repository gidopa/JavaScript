/*
    document객체에 만들어져 있는 css선택자를 사용하는 메소드
    - querySelector(css선택자)
    - 매개변수로 넘긴 css선택자에 해당하는 노드를 1개만 선택해서 반환

    - qeuerySelectAll(css선택자)
    - 매개변수로 넘긴 css선택자에 해당하는 노드 전부를 선택해서 배열로 반환
*/
// class속성의 값이 box-1인 노드를 선택해 반환
console.log(
  'document.querySelector(".box-1")',
  document.querySelector(".box-1")
);
// 이건 배열로 받아와서 index0의 요소의 children
console.log(
  'document.getElementsByClassName("box-1")[0].children',
  document.getElementsByClassName("box-1")[0].children
);

console.log(
  'document.querySelector(".box-1").children',
  document.querySelector(".box-1").children
);
console.log(
  'document.querySelectorAll(".text")',
  document.querySelectorAll(".text")
);
//.box-2 .text 여기서의 공백은 box-2의 모든 자식들중에서 라는 뜻
//.box-2 .text -> class="box-2"의 요소의 자식들중에서 class="text"인 요소들을 다 가져와서 반환한다

console.log(
  'document.querySelectorAll(".box-2 .text")',
  document.querySelectorAll(".box-2 .text")
);
