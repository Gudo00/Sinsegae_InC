package org.zerock.sb7.sample.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.zerock.sb7.sample.controller.dto.SampleDTO;

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
    public void ex2( @AuthenticationPrincipal UserDetails userDetails ) {
        log.info("ex2");
        log.info("----------------------------");
        log.info(userDetails.getUsername());
        log.info(userDetails.getAuthorities());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("ex3")
    public void ex3(){
        log.info("ex3");
    }

    @PreAuthorize("#dto.author == authentication.name")
    @GetMapping("exDTO")
    public void exDTO(SampleDTO dto ){

        log.info("exDTO");
        log.info(dto);
    }
}
