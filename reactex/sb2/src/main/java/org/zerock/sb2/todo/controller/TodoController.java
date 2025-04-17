package org.zerock.sb2.todo.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.sb2.todo.dto.ActionResultDTO;
import org.zerock.sb2.todo.dto.TodoDTO;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todos")
@Log4j2
@RequiredArgsConstructor
@PreAuthorize("permitAll()")
public class TodoController {

    @PreAuthorize("hasRole('USER')")
    @GetMapping("list")
    public ResponseEntity<List<TodoDTO>> list1(){

        List<TodoDTO> list
                = List.of(
                TodoDTO.builder()
                        .tno(10L)
                        .title("title10")
                        .writer("writer10")
                        .build(),
                TodoDTO.builder()
                        .tno(9L)
                        .title("title9")
                        .writer("writer9")
                        .build()
        );

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        log.info("----------------------");
        log.info(list);


        return ResponseEntity.ok(list);
    }


    @PostMapping("")
    public ResponseEntity<ActionResultDTO<Long>> post(TodoDTO dto){

        log.info("----------------post--------------------");
        log.info(dto);

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        return ResponseEntity.ok(ActionResultDTO.<Long>builder()
                .result("success")
                .data(10L)
                .build());

    }
}