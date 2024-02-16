//js 문법의 선택자
const js = document.getElementsByTagName("h1")[0];
console.log("js", js);
const js2 = document.getElementById("h1");
console.log("js2", js2);
//jquery 선택자
const jq = $("h2")[0]; //$('h2')[0] , $('h2')[1]
const jq2 = $("h2")[1];
console.log("jq", jq);
console.log("jq2", jq2);
// id선택자 # (CSS와 동일하다)
const jqid = $("#h2");
console.log("jqid", jqid);
