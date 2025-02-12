package org.zerock.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

/**
 * Servlet implementation class SignoutController
 */
@WebServlet("/signout")
public class SignoutController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SignoutController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//기존에 없었다면 새로 만들지 마라. 
		HttpSession session = request.getSession(false);
		
		//로그인 되어 있지 않은 경우 
		if(session == null) {
			response.sendRedirect("/signin");
			return;
		}
		
		if(session.getAttribute("user") != null) {
			
			session.invalidate(); //세션은 무효화 
			response.sendRedirect("/signin?msg=signout");
			return;
		}
		
		response.sendRedirect("/signin?msg=not");
	}

}
