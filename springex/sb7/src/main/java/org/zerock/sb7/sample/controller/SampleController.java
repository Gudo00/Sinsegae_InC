package org.zerock.sb7.sample.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.zerock.sb7.member.dto.MemberDTO;
import org.zerock.sb7.sample.controller.dto.SampleDTO;

import java.util.List;

@Controller
@RequestMapping("/sample")
@Log4j2
public class SampleController {

    //permitAll

    @PreAuthorize("permitAll()")
    @GetMapping("ex1")
    public void ex1(){
       log.info("ex1");
    }

    //인증이 된(로그인된) 사용자들만 접근하게
    //isAuthorized( )
    @PreAuthorize("isAuthenticated()")
    @GetMapping("ex2")
    public void ex2( @AuthenticationPrincipal MemberDTO memberDTO ) {
        log.info("ex2");
        log.info("----------------------------");
        log.info(memberDTO);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("ex3")
    public void ex3(){
        log.info("ex3");
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("ex4")
    public void ex4(Model model){

        SampleDTO dto = new SampleDTO();
        dto.setAuthor("user02");
        dto.setTitle("Sample Title by user02");

        model.addAttribute("dto", dto);
    }


    @PreAuthorize("#dto.author == authentication.name")
    @GetMapping("exDTO")
    public void exDTO(SampleDTO dto ){

        log.info("exDTO");
        log.info(dto);
    }
}
