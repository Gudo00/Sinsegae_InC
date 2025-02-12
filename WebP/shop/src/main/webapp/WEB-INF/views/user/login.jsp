<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 페이지</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

        body {
            font-family: 'Galmuri', sans-serif;
            background-color: #222222;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .card {
            background: rgba(0, 0, 0, 0.8);
            border: 2px solid #ffffff;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
            padding: 30px;
            width: 350px;
            text-align: center;
        }

        h3 {
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .form-label {
            color: #ffffff;
            font-size: 1.1rem;
        }

        .form-control {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid #ffffff;
            color: #fff;
            font-size: 1.1rem;
        }

        .form-control:focus {
            background: rgba(255, 255, 255, 0.2);
            outline: none;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
        }

        .btn-primary {
            background: #ffcc00;
            border: none;
            color: #222222;
            font-weight: bold;
            font-size: 1.2rem;
            padding: 12px 0;
        }

        .btn-primary:hover {
            background: #e6b800;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }

        .text-center a {
            color: #ffffff;
            font-size: 1.1rem;
            text-decoration: none;
            transition: text-shadow 0.3s ease;
        }

        .text-center a:hover {
            color: #ffcc00;
        }
    </style>
</head>
<body>

    <div class="card">
        <h3>로그인</h3>
        <form action="/login" method="post">
            <div class="mb-3">
                <label for="uid" class="form-label">아이디</label>
                <input type="text" class="form-control" id="uid" name="uid" required>
            </div>
            <div class="mb-3">
                <label for="upw" class="form-label">비밀번호</label>
                <input type="password" class="form-control" id="upw" name="upw" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">로그인</button>
        </form>
        <div class="text-center mt-3">
            <a href="#">비밀번호 찾기</a> | <a href="#">회원가입</a>
        </div>
    </div>

    <script>
        const msg = '${param.msg}';

        if (msg === 'signout') {
            alert("정상적으로 로그아웃 처리되었습니다.");
        }

        if (msg === 'not') {
            alert("이미 로그아웃 상태입니다.");
        }
    </script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
