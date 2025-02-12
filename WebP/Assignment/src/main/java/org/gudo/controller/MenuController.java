package org.gudo.controller;

import java.io.IOException;
import java.util.LinkedHashMap;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/Menu")
public class MenuController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public MenuController() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // LinkedHashMap으로 이미지와 메뉴 이름 매핑
        LinkedHashMap<String, String> menuMap = new LinkedHashMap<>(); // ArrayList로 하다가 HashMap으로 변경.
        menuMap.put("1.jpg", "쉑버거");
        menuMap.put("2.jpg", "스모크쉑");
        menuMap.put("3.jpg", "시추안 크리스프 버거");
        menuMap.put("4.jpg", "쉑 스택");
        menuMap.put("5.jpg", "치킨쉑");

        // request 객체에 메뉴 데이터를 저장
        request.setAttribute("menuMap", menuMap);

        // JSP로 포워딩
        RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/menuList.jsp");
        dispatcher.forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}