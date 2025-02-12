<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="jakarta.tags.core"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>공연 상세 정보</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Galmuri:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Galmuri', sans-serif;
            background: #121212;
            color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            padding: 50px;
            background: #2c2c2c;
            border-radius: 15px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
            margin-top: 50px;
        }

        h2 {
            font-size: 3rem;
            font-weight: bold;
            color: #f0f0f0;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
            margin-bottom: 30px;
            text-align: center;
        }

        .card {
            background-color: #222;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
        }

        .card-img-top {
            width: 100%;
            height: 100%;
            object-fit: contain; /* 이미지 잘림 방지 */
            max-height: 400px; /* 최대 높이 제한 */
            border-bottom: 2px solid #444;
        }

        .card-body {
            color: #f0f0f0;
            padding: 30px;
            text-align: center;
        }

        .card-title {
            font-size: 2rem;
            font-weight: bold;
            color: #f0f0f0;
            margin-bottom: 20px;
        }

        .card-text {
            font-size: 1.2rem;
            margin-bottom: 15px;
        }

        .card-text strong {
            font-weight: bold;
            color: #ffcc00;
        }

        .btn-primary {
            background-color: #444;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 12px 30px;
            font-size: 1.3rem;
            font-weight: bold;
            text-transform: uppercase;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s ease;
        }

        .btn-primary:hover {
            background-color: #666;
            transform: scale(1.05);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .btn-secondary {
            background-color: #444;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 12px 30px;
            font-size: 1.3rem;
            font-weight: bold;
            text-transform: uppercase;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s ease;
        }

        .btn-secondary:hover {
            background-color: #666;
            transform: scale(1.05);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .cart-info {
            font-size: 1.5rem;
            font-weight: bold;
            color: #f0f0f0;
            text-align: center;
            margin-bottom: 30px;
            text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
        }

        .cart-info a {
            color: #f0f0f0;
            text-decoration: none;
            font-weight: normal;
            transition: color 0.3s;
        }

        .cart-info a:hover {
            color: #ffcc00;
            text-decoration: underline;
        }
    </style>
</head>
<body>

<c:if test = "${user != null }">
    <div class="cart-info">
        USER: ${user} <b>CART: ${count}</b>
    </div>
</c:if>

    <div class="container mt-4">
        <h2 class="text-center mb-4">공연 상세 정보</h2>
        <div class="card mx-auto" style="max-width: 600px;">
            <img src="http://localhost/${dto.img }" class="card-img-top" alt="상품 이미지">
            <div class="card-body">
                <h5 class="card-title">상품명: ${dto.pname }</h5>
                <p class="card-text"><strong>상품 번호:</strong> ${dto.pno }</p>
                <p class="card-text"><strong>가격:</strong> ${dto.price }</p>
                <p class="card-text"><strong>설명:</strong> 이 상품은 예제 상품으로 상세 설명이 여기에 들어갑니다.</p>
                
                <form action="/cart/add" method="post">
                    <input type='hidden' name="pno" value="${dto.pno}">
                    <button class="btn btn-primary">예매 하기</button>
                </form>

                <a href="/product/list" class="btn btn-secondary mt-3">목록으로 돌아가기</a>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
