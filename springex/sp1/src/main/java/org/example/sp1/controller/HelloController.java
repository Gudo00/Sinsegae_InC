package org.example.sp1.controller;


import lombok.RequiredArgsConstructor;
import org.example.sp1.service.HelloService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

}
