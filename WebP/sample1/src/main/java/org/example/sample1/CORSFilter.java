package org.example.sample1;

import jakarta.servlet.*;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
@WebFilter(urlPatterns = "/*")
public class CORSFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        // 🔥 모든 도메인 허용 (보안 주의!)
        res.setHeader("Access-Control-Allow-Origin", "*");

        // 허용할 HTTP 메서드
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

        // 허용할 헤더
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        // 인증 정보 포함 허용 (와일드카드(*) 사용 시 true 설정 불가 → 특정 도메인 사용해야 함)
        res.setHeader("Access-Control-Allow-Credentials", "false");

        // Preflight 요청(OPTIONS)에 대한 응답 처리
        if ("OPTIONS".equalsIgnoreCase(req.getMethod())) {
            res.setStatus(HttpServletResponse.SC_OK);
            return;
        }

        // 다음 필터로 요청 전달
        chain.doFilter(request, response);
    }

}