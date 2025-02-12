package org.zerock.controller;

import java.io.IOException;

import org.zerock.dto.TodoDTO;
import org.zerock.service.TodoService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * Servlet implementation class TodoModifyController
 */
@WebServlet("/todo/modify/*")
public class TodoModifyController extends HttpServlet {
    private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TodoModifyController() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        // 첫 번째로 선언된 session을 사용합니다
        HttpSession session = request.getSession(false);
        
        if(session == null || session.getAttribute("user") == null ) {
            response.sendRedirect("/signin");
            return;
        }
        
        String uri = request.getRequestURI();
        String[] arr = uri.split("/");

        String tnoStr = arr[3];
        int tno = Integer.parseInt(tnoStr);
        
        try {
            // DB에서 Todo 레코드를 조회한 결과. 없으면 Exception 발생
            TodoDTO dto = TodoService.INSTANCE.read(tno);
            
            // 세션에서 사용자 정보 가져오기
            String signedUser = (String) session.getAttribute("user");

            // 사용자 이름 비교
            if (!signedUser.equals(dto.getWriter())) {
                response.sendError(403, "Access Denied");
                return;
            }

            request.setAttribute("dto", dto);
            request.getRequestDispatcher("/WEB-INF/views/todo/modify.jsp").forward(request, response);
            
        } catch (Exception e) {
            // 오류 발생 시 404 오류를 반환
            response.sendError(404, "에러가 발생했습니다! 상태 코드: " + 404);
        }
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        String title = request.getParameter("title");
        
        String uri = request.getRequestURI();
        String[] arr = uri.split("/");

        String tnoStr = arr[3];
        int tno = Integer.parseInt(tnoStr);
        
        // 수정할 TodoDTO 객체 생성
        TodoDTO dto = TodoDTO.builder().title(title).tno(tno).build();
        
        try {
            // Todo 수정 서비스 호출
            TodoService.INSTANCE.modify(dto);
            
            // 수정 후 해당 Todo를 읽어보는 페이지로 리다이렉션
            response.sendRedirect("/todo/read/" + tno);
            
        } catch (Exception e) {
            // 예외 발생 시 에러 출력
            e.printStackTrace();
        }
    }
}
