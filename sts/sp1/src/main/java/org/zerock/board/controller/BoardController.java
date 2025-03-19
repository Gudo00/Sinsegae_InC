package org.zerock.board.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

//스프링의 빈으로 동작하기 위한 설정 
@Controller
@RequestMapping("/board/")
@Log4j2
@RequiredArgsConstructor 
public class BoardController {

	@GetMapping("list")
	public void list(Model model) { //마지막 파라미터로 //카트역할 View까지 데이터를 전달
		
		List<String> list = List.of("AAA","BBB","CCC","DDD");
		
		model.addAttribute("wordList", list);
		
		log.info("board list");
	}
	
	@GetMapping("add")
	public void addGET() {
		
	}
	
	//board/ex1
	@GetMapping("ex1")
	public String ex1 ( @RequestParam(name = "age", defaultValue = "10") int age) {
		
		log.info("ex1 " + age);
		
		return "redirect:/board/list";
	}
	

}






