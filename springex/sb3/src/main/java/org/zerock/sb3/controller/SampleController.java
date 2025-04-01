package org.zerock.sb3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
@RequestMapping("/sample")
public class SampleController {

  static class SampleVO{

    private String s1;
    private String s2;

    public SampleVO(String s1, String s2) {
      this.s1 = s1;
      this.s2 = s2;
    }

    public String getS1() {
      return s1;
    }
    public void setS1(String s1) {
      this.s1 = s1;
    }
    public String getS2() {
      return s2;
    }
    public void setS2(String s2) {
      this.s2 = s2;
    }
    

  }

  
  @GetMapping("ex1")
  public void ex1(Model model){

    String[] arr = new String[]{"AAA","BBB","CCC"};

    java.util.List<SampleVO> voList = java.util.List.of(new SampleVO("A", "aaa"), new SampleVO("B","bbbb"));


    model.addAttribute("list", arr);
    model.addAttribute("voList", voList);
  }

  @GetMapping("ex2")
  public void ex2() {
  }
  
}
