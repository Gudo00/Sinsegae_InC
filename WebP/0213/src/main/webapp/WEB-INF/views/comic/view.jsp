<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>화살표와 글자</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <style>
        .center-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-size: 3rem;
        }
        .arrow {
            cursor: pointer;
            margin: 0 20px;
        }
    </style>
</head>
<body>
    <div class="container center-content">
        <span class="arrow" >&#9664;</span>
        <span id="displayText">${quiz}</span>
        <span class="arrow fw" >&#9654;</span>
    </div>
    
    <form id="form1" action="/comic/view" method="post">
    </form>
    
    <script>

    const form1 = document.querySelector("#form1")
    
    document.querySelector(".fw").addEventListener("click", e => {
    	
    	e.preventDefault()
    	
    	form1.submit()
    	
    	
    }, false)
    
    
    </script>
</body>
</html>
