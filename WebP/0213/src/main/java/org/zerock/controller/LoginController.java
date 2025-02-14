package org.zerock.controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * Servlet implementation class LoginController
 */
@WebServlet("/login")
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.getRequestDispatcher("/WEB-INF/views/login.jsp").forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String tempNum = request.getParameter("tempNum");
		
		HttpSession sess = request.getSession(false);
		
		if(sess == null || sess.getAttribute("temp") == null) {
			response.sendRedirect("/login");
			return;
		}
		
		
		String tempValue = (String) sess.getAttribute("temp");
		
		//값이 일치하지 않으면 
		if(!tempValue.equals(tempNum)) {
			response.sendRedirect("/login");
			return;
		}else {
			
			sess.removeAttribute("temp");
			
		}
		
		
		//jakarta.servlet.http.Cookie
		Cookie loginCookie = new Cookie("login", "AAA");
		loginCookie.setMaxAge(60*60*24);
		loginCookie.setPath("/");
		
		//응답 보낼때 response에 추가해 주어야 함 
		response.addCookie(loginCookie);
		
		response.sendRedirect("/main");
		
	}

}