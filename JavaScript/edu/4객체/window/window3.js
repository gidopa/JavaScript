/*
    setInterval()메소드
    - 일정한 시간 간격으로 실행문을 반복하여 실행시킬 때 사용하는 메소드
    - 일정한 시간 간격으로 자동으로 사진이 바뀌는 사진첩을 만든다거나 
      자동으로 흐르는 슬라이드 배너등을 만들때 사용
    - 기본문법
    let t = setInterval("실행문", 시간간격의값->밀리초);
    참조변수를 만드는 이유 : setInterval()이라는 메소드를 제거할때 사용 
    
    clearInterval()메소드
    setInterval()을 제거할때 사용하는 메소드 
    기본문법
    - clearInterval(참조변수명);
    - clearInterval(t) -> t에 저장된 setInterval()메소드 삭제
*/
let i = 0;
let auto = setInterval("console.log(i++)", 3000);
