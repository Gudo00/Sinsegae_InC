package org.zerock.cart.controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CartController
 */
@WebServlet("/cart/*")
public class CartController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CartController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
    //cart/add --- POST 
    //cart/list --- GET 
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String path = request.getRequestURI();
		
		String method = request.getMethod();
		
		if(path.startsWith("/cart/add") && method.equals("POST")) {
			addCartPOST(request,response);
		}else if(path.startsWith("/cart/view") && method.equals("GET")) {
			viewGET(request,response);
		}
	}
	
	private void addCartPOST(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		//상품을 추가 
		//장바구니에 있는 상품 목록을 확인 하려고 이동 
		System.out.println("addCartPOST");
		
		response.sendRedirect("/cart/view"); //sendRedirect는 항상 브라우저에서 GET방식으로 호출 
		
	}
	
	private void viewGET(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println("Cart viewGET");
		
		request.getRequestDispatcher("/WEB-INF/views/cart/view.jsp").forward(request,response);
		
	}
}