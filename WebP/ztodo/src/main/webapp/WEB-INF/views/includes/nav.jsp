<%@ page language="java" contentType="text/html; charset=UTF-8"%>
    
<%@ taglib prefix="c" uri="jakarta.tags.core"%>    

<style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

    .navbar {
        background: rgba(0, 0, 0, 0.9);
        border-bottom: 3px solid #00ffcc;
        box-shadow: 0 0 15px rgba(0, 255, 204, 0.7);
        font-family: 'Orbitron', sans-serif;
    }

    .navbar-brand {
        font-size: 1.5rem;
        font-weight: bold;
        color: #00ffcc !important;
        transition: all 0.3s ease-in-out;
    }

    .navbar-brand:hover {
        text-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
    }

    .navbar-text {
        color: #ffffff;
        font-weight: bold;
    }

    .btn-danger, .btn-primary {
        font-weight: bold;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
    }

    .btn-danger {
        background: #ff4444;
        border: 2px solid #ff4444;
    }

    .btn-danger:hover {
        background: #cc0000;
        box-shadow: 0 0 10px rgba(255, 68, 68, 0.7);
    }

    .btn-primary {
        background: #00ccff;
        border: 2px solid #00ccff;
    }

    .btn-primary:hover {
        background: #0088cc;
        box-shadow: 0 0 10px rgba(0, 204, 255, 0.7);
    }
</style>

<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="/todo/list">Todo App</a>
        <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
                <c:if test="${user != null}">
                    <li class="nav-item">
                        <span class="navbar-text me-3">${user}님 환영합니다!</span>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-danger" href="/signout">로그아웃</a>
                    </li>
                </c:if>  
                <c:if test="${user == null}">  
                    <li class="nav-item">
                        <a class="btn btn-primary" href="/signin">로그인</a>
                    </li>
                </c:if>
            </ul>
        </div>
    </div>
</nav>
