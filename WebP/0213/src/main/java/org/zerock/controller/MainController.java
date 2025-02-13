package org.zerock.controller;

import java.io.IOException;
import java.util.Arrays;
import java.util.Optional;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MainController
 */
@WebServlet("/main")
public class MainController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 쿠키 들고옴
		Cookie[] cks = request.getCookies();
		
		if(cks != null && cks.length != 0) {
			
			Optional<Cookie> viewCookieResult = 
					Arrays.stream(cks).filter(ck -> ck.getName().equals("views")).findFirst();
			
			//views라는 이름의 쿠키가 없다면 
			if(viewCookieResult.isEmpty()) {
				Cookie viewCookie = new Cookie("views","1");
				viewCookie.setMaxAge(60*60*24*7);
				viewCookie.setPath("/");
				response.addCookie(viewCookie);
			}
			
		}
		
		
		request.getRequestDispatcher("/WEB-INF/views/main.jsp").forward(request, response);
		
	}

	
}




