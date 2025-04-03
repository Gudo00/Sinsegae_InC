package org.zerock.sb2.reply.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.reply.dto.ReplyAddDTO;
import org.zerock.sb2.reply.dto.ReplyListDTO;
import org.zerock.sb2.reply.service.ReplyService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/replies")
@RequiredArgsConstructor
@Log4j2
public class ReplyController {

    private final ReplyService service;

    @GetMapping("board/{bno}/list")
    public ResponseEntity<PageResponseDTO<ReplyListDTO>> listOfBoard(
            @PathVariable("bno") Long bno, PageRequestDTO requestDTO) {

        return ResponseEntity.ok(service.getListOfBoard(bno, requestDTO));
    }

    @PostMapping("")
    public ResponseEntity<Map<String, String>> add(
            @Valid @RequestBody ReplyAddDTO dto, BindingResult bindingResult){

        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            bindingResult.getFieldErrors().forEach(error ->
                    errors.put(error.getField(), error.getDefaultMessage())
            );
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        Long rno = service.add(dto);

        return ResponseEntity.ok(Map.of("rno", String.valueOf(rno)));

    }
}
