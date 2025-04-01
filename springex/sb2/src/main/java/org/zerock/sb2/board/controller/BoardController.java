package org.zerock.sb2.board.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.service.BoardService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;


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
  
  
}
