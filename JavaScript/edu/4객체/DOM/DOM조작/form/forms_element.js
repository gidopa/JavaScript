console.log("document.frm1.elements", document.frm1.elements);
const fomr = document.forms;
console.log("fomr", fomr);
const a = document.frm1.elements;
const HTML1 = a[0];
console.log("a", a);
//input 태그임 첫번째 요소로 label태그를 가져오지 않는다
//입력하거나 선택하는 태그들을 가져옴
//[] -> form태그의 하위태그들 중에서 name속성값을 찾아 가져온다
const HTML2 = a["uname"];
const HTML3 = document.frm1.uname;
console.log("HTML1", HTML1);
console.log("HTML2", HTML2);
console.log("HTML3", HTML3);
//HTML 1,2,3은 다 같다 ~

const input1 = document.frm1.uname;
const input2 = document.frm1.age;
const select1 = document.forms[0].gender;
console.log("input1", input1);
console.log("input2", input2);
console.log("select1", select1);
