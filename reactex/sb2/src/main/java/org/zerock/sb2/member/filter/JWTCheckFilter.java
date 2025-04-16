package org.zerock.sb2.member.filter;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.zerock.sb2.util.JWTUtil;

import java.io.IOException;

@Component
@Log4j2
@RequiredArgsConstructor
public class JWTCheckFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    public enum JWTErrorCode {

        NO_ACCESS_TOKEN(401, "No access token");

        private int code;
        private String message;

        JWTErrorCode(int code, String message) {
            this.code = code;
            this.message = message;
        }
        public int getCode() {
            return code;
        }
        public String getMessage() {
            return message;
        }

    }


    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {

        log.info("------shouldNotFilter---------");
        //부정의 부정 -> 긍정
        return false;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        log.info("------doFilterInternal---------");

        log.info("requestURI: " + request.getRequestURI());

        String headerStr = request.getHeader("Authorization");

        log.info("headerStr: " + headerStr);

        //Access Token이 없는 경우
        if (headerStr == null || !headerStr.startsWith("Bearer ")) {
            handleException(response, JWTErrorCode.NO_ACCESS_TOKEN);
            return;
        }


        filterChain.doFilter(request, response);
    }

    private void handleException(HttpServletResponse response, JWTErrorCode errorCode) throws IOException {
        response.setStatus(errorCode.getCode());
        response.setContentType("application/json");
        response.getWriter().println("{\"error\": \"" + errorCode.getMessage() + "\"}");
    }

}
