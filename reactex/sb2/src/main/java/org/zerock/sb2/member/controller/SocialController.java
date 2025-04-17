package org.zerock.sb2.member.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zerock.sb2.member.service.MemberService;
import org.zerock.sb2.util.JWTException;
import org.zerock.sb2.util.JWTUtil;

import java.util.Map;

@RestController
@Log4j2
@RequiredArgsConstructor
public class SocialController {

    private final MemberService memberService;

    private final JWTUtil jwtUtil;

    @PostMapping("/api/v1/member/login")
    public ResponseEntity<String[]> login (@RequestParam("uid") String uid,@RequestParam("upw") String upw) {

        log.info("login----------------------------");
        log.info(uid + " " + upw);

        //사용자 정보를 조회 생략

        String accessToken = jwtUtil.createToken(Map.of("uid",uid), 5);
        String refreshToken = jwtUtil.createToken(Map.of("uid",uid), 10); //60*24*7

        String[] result = new String[]{accessToken, refreshToken};

        return ResponseEntity.ok(result);
    }


    @GetMapping("/api/v1/member/kakao")
    public ResponseEntity<String[]> getKakao( @RequestParam("accessToken") String accessToken) {

        log.info("getKakao: " + accessToken);

        String kakaoEmail = memberService.getKakaoEmail(accessToken);

        log.info("kakaoEmail: " + kakaoEmail);

        String[] result = new String[]{"access.........", "refresh............."};

        return ResponseEntity.ok(result);
    }

    @RequestMapping("/api/v1/member/refresh")
    public ResponseEntity<String[]> refresh (
            @RequestHeader("Authorization") String accessTokenStr,
            @RequestParam("refreshToken") String refreshToken) {

        String accessToken = accessTokenStr.substring(7);
        String uid = "user00";

        try {
            jwtUtil.validateToken(refreshToken);
        }catch(Exception e){
            log.error("refresh token validation failed", e);

            throw new JWTException(e.getMessage());
        }

        String newAccessToken = jwtUtil.createToken(Map.of("uid",uid), 5);
        String newRefreshToken = jwtUtil.createToken(Map.of("uid",uid), 10); //60*24*7

        String[] result = new String[]{newAccessToken, newRefreshToken};

        return ResponseEntity.ok(result);
    }


}