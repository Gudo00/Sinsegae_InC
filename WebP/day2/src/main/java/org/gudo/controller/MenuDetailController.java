package org.gudo.controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/menuDetail/*")
public class MenuDetailController extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public MenuDetailController() {
        super();

    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		System.out.println("MenuDetailController doGet..........");
		
		request.getRequestDispatcher("/WEB-INF/views/menuDetail.jsp").forward(request, response);

	}

}
