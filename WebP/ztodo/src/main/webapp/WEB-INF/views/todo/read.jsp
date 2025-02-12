<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${dto.tno }번째 Todo</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

    body {
        background-color: #121212;
        color: white;
        font-family: 'Orbitron', sans-serif;
    }

    .card {
        background: rgba(0, 0, 0, 0.8);
        border: 2px solid #00ffcc;
        box-shadow: 0 0 15px rgba(0, 255, 204, 0.5);
    }

    .card-header {
        background: linear-gradient(90deg, #00ffcc, #0099ff);
        color: black;
        font-weight: bold;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .form-control {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid #00ffcc;
        color: white;
    }

    .form-control:focus {
        background: rgba(255, 255, 255, 0.2);
        border-color: #00ccff;
        box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);
    }

    .btn-primary {
        background: #00ccff;
        border: 2px solid #00ccff;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
    }

    .btn-primary:hover {
        background: #0088cc;
        box-shadow: 0 0 10px rgba(0, 204, 255, 0.7);
    }
</style>

</head>
<body>

<!-- 네비게이션 바 추가 -->
<%@include file="../includes/nav.jsp" %>
<!-- 네비게이션 바 추가 끝 -->

<div class="container mt-5">
    <div class="card shadow">
        <div class="card-header text-center">
            <h3>${dto.tno }번째 Todo</h3>
        </div>
        <div class="card-body">
            <div class="input-group mb-3">
                <input type="text" name="tno" class="form-control" value="${dto.tno }" readonly>
            </div>
            
            <div class="input-group mb-3">
                <input type="text" class="form-control" value="${dto.title }" readonly>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" value="${dto.writer }" readonly>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" value="${dto.regDate }" readonly>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" value="${dto.modDate }" readonly>
            </div>
            
            <c:if test="${dto.writer == user }">
                <a class="btn btn-primary w-100 mb-3" href="/todo/modify/${dto.tno }">수정/삭제</a>
            </c:if>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
