package org.zerock.sb7.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.zerock.sb7.member.domain.Member;
import org.zerock.sb7.member.domain.MemberRole;
import org.zerock.sb7.member.dto.MemberDTO;
import org.zerock.sb7.member.repo.MemberRepo;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

@Log4j2
@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final MemberRepo memberRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        log.info("userRequest....");
        log.info(userRequest);

        log.info("oauth2 user.....................................");

        ClientRegistration clientRegistration = userRequest.getClientRegistration();
        String clientName = clientRegistration.getClientName();

        log.info("NAME: " + clientName);

        OAuth2User oAuth2User = super.loadUser(userRequest);
        Map<String, Object> paramMap = oAuth2User.getAttributes();

//        paramMap.forEach((k, v) -> {
//            log.info("-------------------------------------");
//            log.info(k + ":" + v);
//        });

        String email = null;

        switch(clientName){
            case "Kakao":
                email = getKakaoEmail(paramMap);
                break;
        }

        log.info("email: " + email);

        //MemberRepo에서 mid값이 email 회원 정보를 찾아옴
        Member member = memberRepo.selectOne(email);
        //없다면
        if(member == null){
            //새로운 Member 엔티티 생성 해서 저장
            Member newbie = Member.builder()
                    .mid(email)
                    .email(email)
                    .mpw(passwordEncoder.encode("1111"))
                    .social(true)
                    .roleSet(Set.of(MemberRole.USER))
                    .build();
            memberRepo.save(newbie);
            member = newbie;
        }
        //회원을 의미하는 MemberDTO를 반환하도록 수정
        MemberDTO memberDTO = new MemberDTO(member);

        return memberDTO;
    }

    private String getKakaoEmail(Map<String, Object> paramMap){

        log.info("KAKAO-----------------------------------------");

        Object value = paramMap.get("kakao_account");

        log.info(value);

        LinkedHashMap accountMap = (LinkedHashMap) value;

        String email = (String)accountMap.get("email");

        log.info("email..." + email);

        return email;
    }

}
