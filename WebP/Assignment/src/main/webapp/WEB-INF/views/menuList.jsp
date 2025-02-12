<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shake Shack 메뉴 리스트</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            text-align: center;
        }

        header {
            background-color: #00704a;
            color: white;
            padding: 20px 0;
            margin-bottom: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            font-size: 2.5rem;
            margin: 0;
        }

        main {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }

        .menu-item {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 10px;
            max-width: 250px;
            text-align: center;
        }

        .menu-item img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .menu-item h3 {
            margin: 10px 0 0;
            font-size: 1.2rem;
            color: #333;
        }

        footer {
            background-color: #00704a;
            color: white;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
            font-size: 0.9rem;
        }

        footer a {
            color: #00d084;
            text-decoration: none;
            font-weight: bold;
        }

        footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <header>
        <h1>🍔 쉑쉑버거 메뉴 🍟</h1>
    </header>

    <main>
        <c:forEach var="entry" items="${menuMap}">
            <div class="menu-item">
                <img src="imgs/${entry.key}" alt="${entry.value}">
                <h3>${entry.value}</h3>
            </div>
        </c:forEach>
    </main>

    <footer>
        <p>© 2025 Shake Shack. Developed by <a href="https://github.com/gudo123">Gudo</a>.</p>
    </footer>
</body>
</html>