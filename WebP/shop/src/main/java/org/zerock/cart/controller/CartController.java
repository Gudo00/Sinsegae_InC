package org.zerock.cart.controller;

import java.io.IOException;
import java.util.List;

import org.zerock.cart.dto.CartItemDTO;
import org.zerock.cart.service.CartService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

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
		
		//몇 번 상품을 추가하려고 하나? payload로 전달 
		Integer pno = Integer.parseInt(request.getParameter("pno"));
		
		HttpSession session = request.getSession(false);
		//현재 사용자
		String uid = (String)session.getAttribute("user");
		
		//데이터베이스에 tbl_user_cart 테이블에 추가하거나 업데이트 
		try {
			
			boolean updated = CartService.INSTANCE.addItem(uid, pno);
			
			int count = (Integer)session.getAttribute("count");
			
			session.setAttribute("count",  updated? count + 1: count);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		
		
		
		response.sendRedirect("/cart/view"); //sendRedirect는 항상 브라우저에서 GET방식으로 호출 
		
	}
	
	private void viewGET(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println("Cart viewGET");
		
		request.getRequestDispatcher("/WEB-INF/views/cart/view.jsp").forward(request,response);
		
	}
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	