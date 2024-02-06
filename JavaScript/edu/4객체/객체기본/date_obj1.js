let d = new Date();
let nowMonth = d.getMonth();
//현재 월의 -1을 반환해줌
document.write("현재 월 : " + (nowMonth + 1) + "<br>");
//t.getDate메소드를 호출하면 현재 며칠인지를 리턴
let nowDate = d.getDate();
document.write("현재 일 : " + nowDate + "<br>");
//t.getDay() 현재 무슨요일인지 반환 숫자값으로
// 0 -> sunday
// 1 -> monday
let nowDay = d.getDay();
document.write("현재 요일 : " + nowDay + "<br>");
document.write("<br>");
//2002년 월드컵 특정 날짜 정보를 제공할때는
//특정 날짜 정보를 Data 객체 생성시 생성함수로 전달해서 생성
// 참조변수 = new Date(연,월-1,일);
let m = new Date(2002, 4, 31);
let theMon = m.getMonth() + 1;
let theDate = m.getDate();
let theDay = m.getDay();
document.write("월드컵 개최월 : " + (theMon + 1) + "<br>");
document.write("월드컵 개최일 : " + theDate + "<br>");
document.write("월드컵 개최요일 : " + theDay + "<br>");
/*
    Date객체에서 제공하는 메소드 종류
    getFullYear -> 현재 날짜 정보 중에서 연도 정보만 반환
    getTime() -> 1970년 1월 1일 12:00이후의 시간을 밀리초 단위로 반환
    getHours() -> 현재 날짜 정보 중에서 시간 정보를 반환해주는데 
                  0~23시까지의 number 값을 반환
    getMinutes() -> 현재 날짜 정보 중에서 분 정보를 반환
                    0~59분 사이의 number값 반환
    getSeconds() -> 현재 날짜 정보 중에서 초 정보를 반호나
                    0~59분 사이의 number값 반환
    setFullYear -> 특정 날짜 객체에 연도 정보를 저장
    setMonth -> 특정 날짜 객체에 월 정보를 저장
    ... 위와 같음

*/
