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
 * Servlet implementation class ComicViewController
 */
@WebServlet("/comic/view")
public class ComicViewController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ComicViewController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println("Comic View GET");
		
		Cookie[] cks = request.getCookies();
		
		Optional<Cookie> viewCookieResult = 
				Arrays.stream(cks).filter(ck -> ck.getName().equals("views")).findFirst();
		
		String quizNum = viewCookieResult.get().getValue();
		
		request.setAttribute("quiz", quizNum + " 번 문제................");
		
		request.getRequestDispatcher("/WEB-INF/views/comic/view.jsp").forward(request, response);
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println("Comic View POST");
		
		Cookie[] cks = request.getCookies();
		
		Optional<Cookie> viewCookieResult = 
				Arrays.stream(cks).filter(ck -> ck.getName().equals("views")).findFirst();
		
		String quizNum = viewCookieResult.get().getValue();
		
		int nextNum = Integer.parseInt(quizNum) + 1;
		
		System.out.println("Next Num: " + nextNum);
		
		Cookie viewCookie = new Cookie("views", ""+nextNum);
		viewCookie.setMaxAge(60*60*24*7);
		viewCookie.setPath("/");
		response.addCookie(viewCookie);
		
		response.sendRedirect("/comic/view");
		
	}
}