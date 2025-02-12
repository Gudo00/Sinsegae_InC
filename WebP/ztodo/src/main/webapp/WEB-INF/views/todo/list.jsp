<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="jakarta.tags.core"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Todo 리스트</title>
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

    .list-group-item a {
        color: #00ffcc;
        text-decoration: none;
        font-weight: bold;
    }

    .list-group-item a:hover {
        text-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
    }

    .btn-danger {
        background: #ff4444;
        border: none;
    }

    .btn-danger:hover {
        background: #cc0000;
        box-shadow: 0 0 10px rgba(255, 68, 68, 0.7);
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

<div class="container">
    <div class="card">
        <div class="card-header">
            <h3>Todo 리스트</h3>
            <a href="/todo/add">새로운 Todo 추가</a>
        </div>
        <div class="card-body">
            <ul id="todoList" class="list-group">
                <c:forEach items="${ dtoList }" var="todo">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <a href="/todo/read/${todo.tno }">${todo.tno }.  ${todo.title } <br> 작성자 ${todo.writer }</a>
                        <button class="btn btn-danger btn-sm" onclick="removeTodo(this)">삭제</button>
                    </li>
                </c:forEach>
            </ul>
        </div>

        <div class="card-body">
            <ul class="pagination">
                <c:if test="${pagingDTO.prev }">
                    <li class="page-item">
                        <a class="page-link" href="/todo/list?page=${pagingDTO.start -1 }">이전</a>
                    </li>
                </c:if>

                <c:forEach begin="${pagingDTO.start}" end="${pagingDTO.end}" var="num">
                    <li class="page-item ${num == pagingDTO.current? 'active':'' }">
                        <a class="page-link" href="/todo/list?page=${num}">${num }</a>
                    </li>
                </c:forEach>

                <c:if test="${pagingDTO.next }">
                    <li class="page-item">
                        <a class="page-link" href="/todo/list?page=${pagingDTO.end + 1 }">다음</a>
                    </li>
                </c:if>
            </ul>
        </div>
    </div>
</div>

<script>
    const result = '${param.result}';

    if (result === 'add') {
        window.alert("새로운 Todo가 등록되었습니다.");
        window.history.pushState(null, "", "?");
    } else if (result === 'remove') {
        window.alert("Todo가 삭제되었습니다.");
        window.history.pushState(null, "", "?");
    }
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
