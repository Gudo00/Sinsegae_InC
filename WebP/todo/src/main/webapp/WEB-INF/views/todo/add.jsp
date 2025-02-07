<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>

<%
    // 세션에서 Todo 리스트 가져오기
    List<String> todoList = (List<String>) session.getAttribute("todoList");

    if (todoList == null) {
        todoList = new ArrayList<>();
        session.setAttribute("todoList", todoList);
    }

    // 폼에서 전달된 Todo 데이터 처리
    String title = request.getParameter("title");
    String writer = request.getParameter("writer");
    String todo = request.getParameter("todo");

    if (title != null && writer != null && todo != null &&
        !title.trim().isEmpty() && !writer.trim().isEmpty() && !todo.trim().isEmpty()) {
        // 리스트에 추가하고 PRG 패턴 적용
        String todoItem = "📌 <strong>" + title + "</strong> (작성자: " + writer + ") - " + todo;
        todoList.add(todoItem);
        session.setAttribute("todoList", todoList);

        // ✅ PRG 패턴 적용 (POST 요청 후 리다이렉트)
        response.sendRedirect("add.jsp");
        return;  // 아래 HTML 코드 실행 방지
    }
%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔥 Todo 리스트</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: #2c3e50;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            width: 350px;
        }

        h1 {
            margin-bottom: 20px;
            font-size: 24px;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: none;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 10px;
            background: #ff6b6b;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background: #e05656;
        }

        .todo-list {
            margin-top: 20px;
            list-style: none;
            padding: 0;
        }

        .todo-item {
            background: #34495e;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            text-align: left;
            color: white;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>🔥 Todo 리스트</h1>
        <form action="/todo/add" method="post">  <!-- ✅ 'add.jsp'로 직접 제출 -->
            <input type="text" name="title" placeholder="제목을 입력하세요..." required>
            <input type="text" name="writer" placeholder="작성자를 입력하세요..." required>
            <input type="text" name="todo" placeholder="할 일을 입력하세요..." required>
            <button type="submit">추가</button>
        </form>

        <div class="todo-list">
            <h2>📝 Todo 리스트</h2>
            <ul class="list-group">
                <% for (String item : todoList) { %>
                    <li class="list-group-item todo-item"><%= item %></li>
                <% } %>
            </ul>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
