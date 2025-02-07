package org.gudo.controller;

import java.io.IOException;
import java.util.List;

import org.gudo.dto.MenuDTO;
import org.gudo.service.MenuService;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/menu")
public class MenuController extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
    
	private MenuService menuService;
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MenuController() {
        super();
        this.menuService = new MenuService();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		List<MenuDTO> menus = menuService.getMenus();
		
		request.setAttribute("menus", menus);
		
		RequestDispatcher dispatcher = 
				request.getRequestDispatcher("/WEB-INF/views/menuList.jsp");
		dispatcher.forward(request, response);
	}

}