<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="jakarta.tags.core"%>
    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Product List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Galmuri:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Galmuri', sans-serif;
            background: #121212; /* 어두운 배경 */
            color: #f0f0f0; /* 밝은 텍스트 */
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 1200px;
            padding: 50px;
            background: #2c2c2c; /* 어두운 그레이 톤 */
            border-radius: 15px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
        }

        h2 {
            font-size: 3rem;
            font-weight: bold;
            color: #f0f0f0;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.8); /* 부드러운 흰색 그림자 */
            margin-bottom: 30px;
            text-align: center;
        }

        .table {
            border-radius: 12px;
            border: 2px solid #444; /* 테이블 테두리 어두운 색 */
            background-color: #222; /* 테이블 배경 어두운 색 */
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .table thead {
            background-color: #333; /* 테이블 헤더 어두운 그레이 */
            color: #fff; /* 텍스트 밝게 */
            text-align: center;
            font-weight: bold;
        }

        .table td, .table th {
            text-align: center;
            vertical-align: middle;
            padding: 20px;
        }

        .table-striped tbody tr:nth-child(odd) {
            background-color: #444; /* 어두운 회색 */
        }

        .table-striped tbody tr:hover {
            background-color: #555; /* 마우스 오버시 더 어두운 색 */
            cursor: pointer;
            transform: scale(1.05);
            transition: all 0.3s ease;
        }

        .imgList {
            width: 250px;
            height: 375px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease, filter 0.3s ease;
        }

        .imgList:hover {
            transform: scale(1.1);
            filter: brightness(1.2);
        }

        .btn-custom {
            background-color: #444; /* 어두운 버튼 색상 */
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

        .btn-custom:hover {
            background-color: #666; /* 마우스 오버시 더 밝은 색 */
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

<div class="container mt-5">
    <h2 class="mb-4">공연 목록</h2>
    <table class="table table-striped">
        <thead class="table-dark">
            <tr>
                <th>번호</th>
                <th>상품명</th>
                <th>가격</th>
                <th>이미지</th>
                <th>예매</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${dtoList}" var="product">
            <tr>
                <td>${product.pno }</td>
                <td><a href="/product/view/${product.pno}" class="text-decoration-none" style="color: #000000;"> ${product.pname }</a></td>
                <td>${product.price }</td>
                <td><img src="http://localhost/${product.img }" class="img-thumbnail imgList" ></td>
                <td>
                    <a href="/product/view/${product.pno}">
                        <button class="btn-custom">예매하기</button>
                    </a>
                </td>
            </tr>
            </c:forEach>
        </tbody>
    </table>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
