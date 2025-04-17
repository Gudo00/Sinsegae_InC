package org.zerock.sb2.member.controller.advice;


import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.zerock.sb2.util.JWTException;

import javax.management.JMException;
import java.util.Map;

@RestControllerAdvice
@Log4j2
public class JWTControllerAdvice {

    @ExceptionHandler(JWTException.class)
    public ResponseEntity<Map<String, Object>> handleJWTException(JWTException e) {

        log.error("=============================");
        log.error("=============================");
        log.error("JWTException", e);

        ResponseEntity<Map<String, Object>> result
                = ResponseEntity.status(401).body(Map.of("error",e.getMessage()));

        return result;
    }
}