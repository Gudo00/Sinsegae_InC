package org.zerock.sb2.member.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
@RequiredArgsConstructor
public class SocialController {

    @GetMapping("/api/v1/member/kakao")
    public ResponseEntity<String[]> getKakao( @RequestParam("accessToken") String accessToken) {

        log.info("getKakao: " + accessToken);

        String[] result = new String[]{"access.........", "refresh............."};

        return ResponseEntity.ok(result);

    }
}
