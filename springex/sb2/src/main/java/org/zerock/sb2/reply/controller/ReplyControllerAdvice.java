package org.zerock.sb2.reply.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.zerock.sb2.reply.exception.ReplyException;

import java.util.Map;

@RestControllerAdvice
public class ReplyControllerAdvice {

    @ExceptionHandler(ReplyException.class)
    public ResponseEntity<Map<String,String>> handle(ReplyException ex){

        return ResponseEntity.status(ex.getCode())
                .body(Map.of("msg", ex.getMessage()));
    }
}
