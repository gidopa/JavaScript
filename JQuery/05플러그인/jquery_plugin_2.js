/*
    input태그에 달력기능 설정을 위해 datepicker()메소드를 호출
    과거의 날짜 비활성화를 위해 {}객체 형태의 css속성과 값을 설정함.
    minDate속성은 시작 날짜, +1 값을 설정하면 오늘날짜 그 다음날짜부터 날짜 선택
    maxDate속성은 종료 날짜 설정, +1M 선택할 수 있는 날부터 한달뒤까지 
*/
$("#startDate").datepicker({ minDAte: +1, maxDate: "+1M" });
