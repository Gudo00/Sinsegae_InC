package org.gudo.controller;

import java.io.IOException;

import org.gudo.dto.TodoDTO;
import org.gudo.service.TodoService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/todo/test")
public class TestController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public TestController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// tno가 2번과 4번인 내용을 보여준다.
		try {			
			TodoDTO two = TodoService.INSTANCE.getTodoByTno(2);
			TodoDTO four = TodoService.INSTANCE.getTodoByTno(4);
			request.setAttribute("two", two);
			request.setAttribute("four", four);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		request.getRequestDispatcher("/WEB-INF/views/todo/test.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
