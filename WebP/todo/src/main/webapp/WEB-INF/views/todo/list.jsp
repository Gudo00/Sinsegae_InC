<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔥 Todo List</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* 기본 스타일 초기화 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background: linear-gradient(45deg, #ff0077, #5c6bc0);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
            animation: backgroundAnim 5s infinite alternate;
        }

        @keyframes backgroundAnim {
            0% { background: linear-gradient(45deg, #ff0077, #5c6bc0); }
            100% { background: linear-gradient(45deg, #ff5722, #8bc34a); }
        }

        .container {
            width: 100%;
            max-width: 700px;
            background: rgba(255, 255, 255, 0.15);
            padding: 20px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
            text-align: center;
            backdrop-filter: blur(10px);
        }

        .card-header {
            background: #ff5722;
            color: white;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            padding: 15px;
        }

        .card-body {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 12px;
            padding: 20px;
            transition: transform 0.3s ease-in-out;
        }

        .card-body:hover {
            transform: scale(1.02);
        }

        .list-group-item {
            background-color: #444;
            color: white;
            border: none;
            margin-bottom: 12px;
            padding: 18px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
            transition: background 0.3s, transform 0.3s;
        }

        .list-group-item:hover {
            background: #ff5722;
            transform: translateY(-5px);
        }

        .btn-danger {
            background: #ff4081;
            border: none;
            color: white;
            font-weight: bold;
            padding: 6px 14px;
            border-radius: 50px;
            transition: background 0.3s, transform 0.3s;
        }

        .btn-danger:hover {
            background: #f50057;
            transform: scale(1.1);
        }

        .pagination a {
            color: #ffeb3b !important;
            font-weight: bold;
            transition: color 0.3s;
        }

        .pagination a:hover {
            color: #ff5722 !important;
        }

        .pagination a:visited {
            color: #ffd54f !important;
        }

        .page-item.active .page-link {
            background-color: #ff5722;
            border-color: #ff5722;
            color: white !important;
        }

        /* 반응형 스타일 */
        @media (max-width: 480px) {
            .container {
                width: 100%;
                padding: 15px;
            }

            .list-group-item {
                font-size: 14px;
            }

            .btn-sm {
                padding: 5px 10px;
            }
        }

    </style>
</head>
<body>

    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-header text-center">
                <h3>🔥 Todo List</h3>
                <a href="/todo/add" class="text-white" style="font-size: 16px;">새로운 Todo 추가</a>
            </div>
            <div class="card-body">
                <ul id="todoList" class="list-group">
                    <c:forEach var="todo" items="${dtoList}">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            ${todo.tno} --- ${todo.title}
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
        const result = '${param.result}'; //query string 처리 가능 

        if (result === 'add') {
            window.alert("새로운 Todo가 등록되었습니다.");
            window.history.pushState(null, "", "?"); //새로고침 문제 해결을 위해서 사용
        }

        function removeTodo(button) {
            // 이 부분에서 삭제 로직을 처리할 수 있습니다.
            const li = button.closest('li');
            li.style.animation = "fadeOut 0.3s ease-in-out";
            setTimeout(() => li.remove(), 300);
        }
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
