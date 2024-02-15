window.onload = function () {
  /*① 포토 목록에 작은 이미지를 클릭했을 때
            큰 이미지를 바꿉니다. */

  //id가  "inner_list"인 <ul  id="inner_list">태그를 선택해서 가져오기
  var list_zone = document.getElementById("inner_list");

  /* 클릭 이벤트를 등록 하기위해서 
    포토 목록에 8개의 <a>를 모두 선택합니다.*/
  //<ul  id="inner_list">태그 내부에 있는  8개의 <a>를 모두 선택해서 배열객체로 저장된  배열 전달받기
  var list_a = list_zone.getElementsByTagName("a");

  /*
      포토 리스트의 모든 <a>에 클릭 이벤트를 등록하기 위해서
      반복문을 이용하여 8개의 <a>에 모두 이벤트를 등록했습니다.
    */
  for (var i = 0; i < list_a.length; i++) {
    // 0~7까지 i의 값을 1씩 증가시키며 {....} 에 실행문을 반복 합니다.
    list_a[i].onclick = function () {
      //모든 <a>태그에  클릭 이벤트를 등록 합니다.
      //즉, 작은 이미지 하나를 클릭 할때 마다..~~ 이벤트 발생 ~
      //큰이미지를 선택 하여 가져오기
      var ph = document.getElementById("photo").children[0];
      //this를 사용하여 클릭한 <a>의  href속성을 큰이미지의 src속성에 적용
      ph.src = this.href;
      return false; // <a>를 클릭했을 때 링크가 되지 않도록 합니다.
    };
  }

  /*② 이전, 다음 버튼을 클릭할 때 마다 <ul>이 100px만큼
           증가 또는 감소되어 좌·우측으로 이동됩니다. */

  /*다음 버튼 > 을 클릭했을 때 마다 <ul>이 100px만큼
       좌측으로 이동해야 합니다.*/
  var b_btn = document.getElementById("next_btn"); //다음 버튼>을 b_btn에 저장
  var m_num = 0;

  // 다음버튼 >을 클릭했을때..
  b_btn.onclick = function () {
    //만약 m_num변수값이 5보다 크거나 같으면 더는 왼쪽으로 이동되지 않도록 return문을 이용해 왼쪽으로  -500px까지만 이동 되도록 함
    if (m_num >= list_a.length - 3) {
      return false;
    }
    //변수 m_num값이 1증가 되도록 하였고
    m_num++;
    //이를 이용하여  margeinLeft 스타일(CSS)값에 적용 시킴
    list_zone.style.marginLeft = -100 * m_num + "px";

    return false; // <a>를 클릭했을 때 링크가 되지 않도록 합니다.
  };

  /*이전 버튼을 클릭했을 때 마다 <ul>이 100px만큼
       우측으로 이동해야 합니다.*/
  var n_btn = document.getElementById("before_btn");

  n_btn.onclick = function () {
    if (m_num <= 0) {
      return false;
    }
    m_num--;
    list_zone.style.marginLeft = -100 * m_num + "px";

    return false; // <a>를 클릭했을 때 링크가 되지 않도록 합니다.
  };
};
//]]>
