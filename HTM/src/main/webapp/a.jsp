<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	//클라이언트가 form1.html 디자인에서 
	//get요청떄린 값 얻어오기
	String name = request.getParameter("name");
	//웹브라우저에 응답
	out.print("입력한 이름은?" + name );
%>>

</body>
</html>