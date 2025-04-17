package org.zerock.sb2.member.filter;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.zerock.sb2.member.security.CustomUserPrincipal;
import org.zerock.sb2.util.JWTUtil;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Component
@Log4j2
@RequiredArgsConstructor
public class JWTCheckFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    public enum JWTErrorCode {

        NO_ACCESS_TOKEN(401, "No access token"),
        EXPIRED_TOKEN(401, "Expired token"),
        BAD_SIGNATURE(401, "Bad signature"),
        MALFORMED_TOKEN(401, "Malformed token");

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

        if(request.getServletPath().startsWith("/api/v1/member/")) {
            return true;
        }

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
        if (headerStr == null || headerStr.contains("undefined") || !headerStr.startsWith("Bearer ")) {
            handleException(response, JWTErrorCode.NO_ACCESS_TOKEN);
            return;
        }
        String accessToken = headerStr.substring(7);

        try {
            Map<String, Object> tokenMap = jwtUtil.validateToken(accessToken);

            String uid = (String) tokenMap.get("uid");

            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(
                            new CustomUserPrincipal(uid),
                            null,
                            List.of(new SimpleGrantedAuthority("ROLE_USER")));

            //스프링 시큐리티 컨텍스트에 추가
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);


            filterChain.doFilter(request, response);

        } catch (Exception e) {
            log.error("===========================");
            String message = e.getMessage();
            if(message.startsWith("JWT signature")){
                handleException(response, JWTErrorCode.BAD_SIGNATURE);
            }else if(message.startsWith("Malformed")){
                handleException(response, JWTErrorCode.MALFORMED_TOKEN);
            }else if(message.startsWith("JWT expired")){
                handleException(response, JWTErrorCode.EXPIRED_TOKEN);
            }
        }



    }

    private void handleException(HttpServletResponse response, JWTErrorCode errorCode) throws IOException {
        response.setStatus(errorCode.getCode());
        response.setContentType("application/json");
        response.getWriter().println("{\"error\": \"" + errorCode.getMessage() + "\"}");
    }

}