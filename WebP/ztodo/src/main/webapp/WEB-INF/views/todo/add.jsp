<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo 추가</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        
        body {
            font-family: 'Orbitron', sans-serif;
            background-color: #0d0d0d;
            color: #ffffff;
        }

        .container {
            margin-top: 50px;
        }

        .card {
            background: rgba(0, 0, 0, 0.8);
            border: 2px solid #00ffcc;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0, 255, 204, 0.7);
            overflow: hidden;
        }

        .card-header {
            background: linear-gradient(45deg, #00ffcc, #00997a);
            color: #0d0d0d;
            font-weight: bold;
            text-align: center;
            padding: 15px;
        }

        .card-header h3 {
            margin: 0;
            font-size: 1.5rem;
        }

        .card-header a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 5px;
            transition: all 0.3s ease-in-out;
        }

        .card-header a:hover {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .input-group input {
            font-family: 'Orbitron', sans-serif;
        }

        .btn-primary {
            background: #00ffcc;
            border: none;
        }

        .btn-primary:hover {
            background: #00997a;
            box-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
        }

        .list-group-item {
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: #fff;
            transition: all 0.3s ease-in-out;
        }

        .list-group-item:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.02);
            box-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
        }

        .pagination {
            justify-content: center;
            margin-top: 20px;
        }

        .page-item .page-link {
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid #00ffcc;
            color: #00ffcc;
        }

        .page-item.active .page-link {
            background: #00ffcc;
            color: #0d0d0d;
            font-weight: bold;
        }

        .page-item .page-link:hover {
            background: rgba(0, 255, 204, 0.3);
            box-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
        }
    </style>
</head>
<body>

<!-- 네비게이션 바 추가 -->
<%@include file="../includes/nav.jsp" %>
<!-- 네비게이션 바 추가 끝 -->

<div class="container mt-5">
    <div class="card">
        <div class="card-header">
            <h3>새로운 Todo 추가</h3>
        </div>
        <div class="card-body">
            <form action="/todo/add" method="post">
                <div class="input-group mb-3">
                    <input type="text" name="title" class="form-control" placeholder="할 일 제목" required>
                </div>
                <div class="input-group mb-3">
                    <input type="text" name="writer" class="form-control" readonly="readonly" value="${user}" required>
                </div>
                <button class="btn btn-primary w-100 mb-3" type="submit">추가</button>
            </form>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
