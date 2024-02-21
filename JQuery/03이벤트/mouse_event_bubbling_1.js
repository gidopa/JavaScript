/*
	주제 : mouseout와 mouseleave이벤트가 구조화된 요소에 어떻게 동작하는지 확인할수 있는 예제로
		<div class="parent">요소안에  <div class="child">요소가 만들어져 있고,
		두 요소에 각각의 이벤트 처리하여 보여주는 예제 입니다.	
*/
// mouseout이벤트 등록
// $(".parent").mouseout(function () {
//   console.log("Parent mouseout");
// });

// $(".child").mouseout(function () {
//   console.log("Child mouseout");
// });
// mouseleave이벤트 등록

$(".parent").mouseleave(function () {
  console.log("Parent mouseleave");
});

$(".child").mouseleave(function () {
  console.log("Child mouseleave");
});
/*
    이 예제를 통해 mouseout에서는 버블링이 발생하여 하위요소에서 상위요소로 
    이벤트 처리 수행 전파가 된다는 것을 확인할수 있으며,
    반면에  moueleave에서는 버블링이 발생하지 않아
    각 요소의 이벤트 처리 수행만 된다는 것을 확인 할수 있습니다.  
*/
