package org.zerock.sb7.member;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.zerock.sb7.member.domain.Member;
import org.zerock.sb7.member.domain.MemberRole;
import org.zerock.sb7.member.repo.MemberRepo;

@SpringBootTest
@Log4j2
public class MemberRepoTest {

    @Autowired
    private MemberRepo memberRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    public void test() {

        for(int i = 0; i < 20; i++){

            Member member = Member.builder()
                    .mid("user" + i)
                    .mpw(passwordEncoder.encode("1111"))
                    .email("user" + i + "@gmail.com")
                    .build();

            member.addRole(MemberRole.USER);

            if(i > 10){
                member.addRole(MemberRole.ADMIN);
            }

            memberRepo.save(member);


        }//end for
    }

    @Test
    public void testSelectOne() {
        String mid = "user19";

        log.info(memberRepo.selectOne(mid));
    }

}
