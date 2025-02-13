package org.zerock.controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LogoutController
 */
@WebServlet("/logout")
public class LogoutController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LogoutController() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Cookie[] cks = request.getCookies();
		
		// login, views 지워야 함
		Cookie loginCookie = new Cookie("login","");
		loginCookie.setMaxAge(0);
		loginCookie.setPath("/"); // 경로는 지정해줘야 함
		
		response.addCookie(loginCookie);
		
		Cookie viewsCookie = new Cookie("views","");
		viewsCookie.setMaxAge(0);
		viewsCookie.setPath("/");
		
		response.addCookie(viewsCookie);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
