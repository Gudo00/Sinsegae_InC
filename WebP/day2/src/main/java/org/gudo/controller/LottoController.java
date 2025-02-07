package org.gudo.controller;

import java.io.IOException;

import org.gudo.service.LottoService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LottoController
 */
@WebServlet("/lotto")
public class LottoController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LottoController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		java.util.List<Integer> balls = LottoService.INSTANCE.select();
		
		//setAttribute(이름, 값)
		request.setAttribute("balls", balls);
		request.getRequestDispatcher("/WEB-INF/views/lotto.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String money = request.getParameter("money");
		
	
		System.out.println("--------------");
		System.out.println(money);
		System.out.println("--------------");
		
		response.sendRedirect("/menu");
		
	}

}
