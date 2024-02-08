/*
    form태그 선택 방법
    방법1. 폼태그에 name속성에 부여된 값을 이용해 선택
    방법2. 폼태그의 forms속성을 이용해 선택하는 방법

    forms속성
    HTMLCollections으로 form들을 다 가져옴
*/
const formss = document.forms;
console.log("formss[0]", formss[0]);
console.log("formss[1]", formss[1]);
console.log("formss[2]", formss[2]);

// 방법 1
// document.form태그에 작성된 name속성값; -> 해당 form을 가져옴
console.log("document.frm1", document.frm1);
