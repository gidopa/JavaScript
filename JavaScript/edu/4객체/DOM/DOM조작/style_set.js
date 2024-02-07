/*
    선택한 노드의 타입이 요소 노드라면 style속성으로 요소에 style 적용 가능(css)
    문법
        요소선택.style.css속성명 = 값
    background-color속성과 같이 -부호가 있으면 -연산자로 인식한다
    그러므로 카멜표기법으로 변경해서 작성
*/
document.getElementById("text").style.color = "red";
document.querySelector("p").style.backgroundColor = "#0ff";
document.querySelector("p").style.fontSize = "30px";
document.querySelector("p").style.color = "#FFF";
