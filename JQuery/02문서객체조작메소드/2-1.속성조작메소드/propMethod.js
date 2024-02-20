$(function () {
  //id="chk1"인 <input type="checkbox" id="chk1">선택하여
  //prop("chekced") 메소드를 호출하면  선택한 체크박스가 체크된 상태이면  true를 반환 하고 미체크된 상태이면 false를 반환
  //	var result_1 = $("#chk1").prop("checked");

  //	console.log(result_1); //false

  //id="chk2"인 <input type="checkbox"> 선택해서 가져와서 체크된 상태인지 검사
  //prop메소드는 체크된 상태이면 true반환 하고 미체크된 상태이면 false를 반환
  //		var result_2 = $("#chk2").prop("checked");

  //		console.log(result_2); //true

  //id="chk3" <input type="checkbox" id="chk3">체크박스 선택해서
  //prop("checked", true); 메소드를 호출하면 미체크된 상태면 true를 넣어 줘서 강제로 체크된 상태의 checked속성을 설정 할수 있다.
  //		var result_3 = $("#chk3").prop("checked", true);

  //		console.log(result_3);

  //id="se_1"인 <select id="se_1">...</select>선택해서 가져와
  // selected속성이 설정된(선택된) <option>요소의 인덱스를 반환합니다.
  //		var result_4 = $("#se_1").prop("selectedIndex");

  //		console.log(result_4);// 인덱스 2

  //		var result_5 = $("label:eq(0)").prop("nodeType");

  //		console.log(result_5);

  //ID:<input type="text" name="id" id="user_id" value="admin" > 의 value속성값을 scott으로 변경 하더라고
  $("#user_id").val("scott");

  //아래의 prop메소드에 defaultValue속성명을 넣어 주면  초기에 설정된 value="admin" 인  admin을 얻을수 있다.
  console.log($("#user_id").prop("defaultValue"));
});
