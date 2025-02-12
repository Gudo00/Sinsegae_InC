package org.zerock.product.controller;

import java.io.IOException;
import java.util.List;

import org.zerock.product.dto.PagingDTO;
import org.zerock.product.dto.ProductDTO;
import org.zerock.product.service.ProductService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ProductController
 */
@WebServlet("/product/*")
public class ProductController extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String path = request.getRequestURI();
		
		String method = request.getMethod();
		
		System.out.println("path: " + path);
		
		try {
			if(path.startsWith("/product/add") && method.equals("GET") ) {
				addGET(request, response);
			}else if(path.startsWith("/product/add") && method.equals("POST")) {
				addPOST(request, response);
			}else if(path.startsWith("/product/list") && method.equals("GET")) {
				listGET(request,response);
			}else if(path.startsWith("/product/view/") && method.equals("GET")) {
				viewGET(request,response);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		
	}
	
	// /product/view/3 3번 상품 조회 
	private void viewGET(HttpServletRequest request, HttpServletResponse response)throws Exception{
		
		String uri = request.getRequestURI();
		String[] arr = uri.split("/");

		String pnoStr = arr[3];

		int pno = Integer.parseInt(pnoStr);
		
		ProductDTO dto = ProductService.INSTANCE.getOne(pno);
		
		request.setAttribute("dto", dto);
		
		request.getRequestDispatcher("/WEB-INF/views/product/view.jsp").forward(request, response);
		
		
	}
	
	private void addGET(HttpServletRequest request, HttpServletResponse response)throws Exception {
		
		request.getRequestDispatcher("/WEB-INF/views/product/add.jsp").forward(request, response);
		
	}
	
	private void addPOST(HttpServletRequest request, HttpServletResponse response)throws Exception {
	
		String pname = request.getParameter("pname");
		
		int price = Integer.parseInt(request.getParameter("price"));
		
		String img = request.getParameter("img");
		
		
				
	}
	
	private void listGET(HttpServletRequest request, HttpServletResponse response)throws Exception {
	
		String pageStr = request.getParameter("page");
		
		int page = 1;
		
		try {
			page = Integer.parseInt(pageStr);
			
			if(page <= 0 ) {
				throw new Exception("under zero");
			}
			
		}catch(Exception e) {
			page = 1;
		}
		
		List<ProductDTO> dtoList = ProductService.INSTANCE.getList(page);
		
		int total = ProductService.INSTANCE.getTotal();
		
		PagingDTO pagingDTO = new PagingDTO(page, total);
		
		request.setAttribute("dtoList", dtoList);
		request.setAttribute("pagingDTO", pagingDTO);
		
		request.getRequestDispatcher("/WEB-INF/views/product/list.jsp").forward(request, response);
		
	}
	

	

}



