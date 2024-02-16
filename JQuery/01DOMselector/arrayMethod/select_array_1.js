function add() {
  //100개의 <div>This is element1</div>요소들을 생성하여 저장시킬  빈 배열 생성
  var elements = [];

  for (var i = 0; i < 100; i++) {
    elements.push("<div>This is element " + i + "</div>");
  }
  //위 for문을 이용해  생성한 <div>요소들 100개는 elements배열에 저장되어 있으므로   반복해서 꺼내어 사용하기위해
  //$.each메소드를 사용합시다.
  $.each(elements, function (index, element) {
    //위 elements배열에 각 index위치에 저장된 동적으로 push한  <div>들을 차례로 얻어서
    //아래의 <div id="container"></div>요소의  텍스트노드위치에 추가
    $("#container").append(element);
  });
}
