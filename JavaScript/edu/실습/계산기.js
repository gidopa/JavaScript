//<input type="button">인 버튼 중에서 하나 클릭하면 클릭한 데이터를 받아서 계산하여 보여주는 기능
function renew(item) {
  let data = document.getElementById("data");
  //renew()의 파라미터가 clear면 전부 없애버려야지
  if (item == "clear") {
    // id속성값이 'data'인 input의 value속성의 값을 빈공백으로 설정해서 입력된 수식을 없애는 효과
    data.value = "";
  } else if (item == "=") {
    // 2 + 3 - 1 이 입력되어 있었다면 =을 클릭했을때 수식이 계산됨
    // eval('1+2') -> 3 문자열 수식을 계산해서 number로 뱉어줌

    //id속성의 값이 data인 input태그에 누적된 수식의 계산 결과를 반환하여
    //id속성의 값이 data인 input태그에 value 속성에 저장
    data.value = eval(data.value);
  } else {
    // 'clear' || '=' 버튼 이외의 다른 걸 클릭했을때
    //data.value에 클릭한 item 값들을 계속 누적시킴
    data.value += item;
  }
}
