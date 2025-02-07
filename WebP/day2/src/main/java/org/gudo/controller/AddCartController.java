package org.gudo.controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddCartController
 */
@WebServlet("/addCart")
public class AddCartController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public AddCartController() {
        super();

    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("AddCartController doPost.........");
		
		// 큰일 날 코드 ..........!!!!! (도배.. Redirect 써야함!!!!!)
		//request.getRequestDispatcher("/WEB-INF/views/cart.jsp").forward(request, response);
		
		response.sendRedirect("/cart");
	}

}
