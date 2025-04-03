package org.zerock.sb2.board.controller;

import java.util.Arrays;
import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.zerock.sb2.board.dto.BoardRegisterDTO;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.service.BoardService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller
@RequestMapping("/board")
@Log4j2
@RequiredArgsConstructor
public class BoardController {

  private final BoardService service;

  @GetMapping("list")
  public void list( @ModelAttribute("requestDTO") PageRequestDTO requestDTO, Model model ) {
  
    log.info("Board list............");

    model.addAttribute("data", service.list(requestDTO));

  }

  @GetMapping("register")
  public void register() {
  }

  @GetMapping("read/{bno}")
  public String read( @ModelAttribute("bno") @PathVariable ("bno") Long bno,
                      PageRequestDTO requestDTO,
                      Model model){

    //service 조회한 결과를 model에 담아야 함

    return "/board/read";
  }

  @PostMapping("register")
  public String postMethodName( @Valid BoardRegisterDTO dto, BindingResult bindingResult, RedirectAttributes rttr) {

    log.info("----------------------");
    log.info(dto);
    log.info(bindingResult);

    if(bindingResult.hasErrors()){

      log.info("has errors..........");

      java.util.Map<String, String> errorMap = new HashMap<>();
      
      bindingResult.getFieldErrors().forEach(fieldError -> {
        log.info("==========================");
        log.info("Field: " + fieldError.getField());  // 에러가 발생한 필드명
        log.info("Rejected Value: " + fieldError.getRejectedValue()); // 사용자가 입력한 잘못된 값
        log.info("Error Message: " + fieldError.getDefaultMessage()); // 에러 메시지

        errorMap.put(fieldError.getField(),fieldError.getDefaultMessage() );

        rttr.addFlashAttribute("errors", errorMap);

      });

      return "redirect:/board/register";

    }//end if
      
    return "redirect:/board/list";
  }
  
  
  
  
}
