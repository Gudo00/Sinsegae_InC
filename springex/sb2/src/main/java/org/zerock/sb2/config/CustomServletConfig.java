package org.zerock.sb2.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
//@EnableWebMvc
public class CustomServletConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 엔드포인트에 대해 CORS 적용
                .allowedOriginPatterns("*") // 모든 도메인 허용 (allowCredentials와 함께 사용 가능)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메서드
                .allowedHeaders("*") // 모든 헤더 허용
                .allowCredentials(true) // 인증 정보 포함 허용 (쿠키, Authorization 헤더 등)
                .maxAge(3600); // preflight 요청 캐싱 시간 (초 단위)

    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 예: /static/** 요청은 classpath:/static/ 경로의 파일로 매핑
        registry.addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/");
    }


}

