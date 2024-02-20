$(function () {
  $("strong").unwrap(); //strong을감싸고 있는 부모 요소h1을 제거 합니다.

  //내용1  내용2 <p>요소 2쌍을 선택해서 가져와  wrap("<div></div>")메소드를 호출하여 각각 감싸서 추가
  /*
        <div>
            <p class="ct1">내용1</p>
        </div>
        <div>
            <p class="ct1">내용2</p>
        </div>
    */
  $(".ct1").wrap("<div></div>");

  //<div>
  //		<p class="ct2">내용3</p>
  //		<p class="ct2">내용4</p>
  //</div>
  $(".ct2").wrapAll("<div></div>");

  //<li>요소들의 모든 하위 요소를  <h3>으로 감싼다.
  // 		<ul>
  // 			<li><h3>내용3</h3></li>
  // 			<li><h3>내용4</h3></li>
  // 		</ul>
  $("li").wrapInner("<h3></h3>");
});
