/*
    text와 password인 input요소에 입력한 값을 가져오려면
        1. form태그를 먼저 선택
        2. type="text"이고 name='id'인 input을 가져옴
*/

document.frm.id.value = "root";
console.log("document.frm.id.value", document.frm.id.value);
document.frm.pw.value = "1234";
console.log("document.frm.pw.value", document.frm.pw.value);
document.frm.area.value = "textarea";
console.log("document.frm.area.value", document.frm.area.value);
console.log(
  'document.getElementsByName("id").value',
  document.getElementsByName("id")[0].value
);
// [속성명="속성값"]으로 속성명과 속성값에 해당하는 태그들을 가져올 수 있음
console.log(
  'document.querySelectorAll("[type=checkbox]")',
  document.querySelectorAll("[type='checkbox']")
);
const box = document.querySelectorAll("[type='checkbox']");
for (let i = 0; i < box.length; i++) {
  console.log(box[i].checked);
}
// 옵션 select 부분
const option = document.querySelectorAll("option");
for (let i = 0; i < option.length; i++) {
  if (option[i].selected === true) {
    console.log("option[i].value", option[i].value);
  }
}

for (let i = 0; i < option.length; i++) {
  if (option[i].value === "melon") {
    option[i].selected = true;
    console.log("option[i].value", option[i].value);
  }
}

//파일 업로드 요소
//input요소에서 핵시믕ㄴ files속성으로 반환되는 FileList객체
// 파일하나를 첨부해서 files속성 호출 후 반환값이 뭔지 확인하자
const file = document.frm.upload.files;
console.log("file", file);
const name = file[0].name;
const size = file[0].size;
const type = file[0].type;
const Date = file[0].Date;
