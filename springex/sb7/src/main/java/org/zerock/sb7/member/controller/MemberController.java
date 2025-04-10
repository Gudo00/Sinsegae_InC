package org.zerock.sb7.member.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/member")
@Log4j2
@RequiredArgsConstructor
public class MemberController {

    @GetMapping("login")
    public void login(
            @RequestParam(required = false, name = "error") String error,
            @RequestParam(required = false, name = "logout") String logout,
            Model model) {

        log.info("GET login");
        log.info("error:" + error);
        log.info(error == null ?"null": "exist");

        if(error != null) {
            model.addAttribute("msg", "Login failed!");
        }

        if(logout != null) {
            model.addAttribute("logout", "Logged out!");
        }

    }
}
