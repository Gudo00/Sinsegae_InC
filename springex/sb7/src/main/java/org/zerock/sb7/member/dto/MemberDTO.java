package org.zerock.sb7.member.dto;

import lombok.Data;
import org.apache.catalina.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.zerock.sb7.member.domain.Member;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Data
public class MemberDTO implements UserDetails, OAuth2User {

    private String mid;
    private String mpw;
    private String email;
    private boolean del;
    private boolean social;

    private List<String> roleNames;

    public MemberDTO(Member member) {

        this.mid = member.getMid();
        this.mpw = member.getMpw();
        this.email = member.getEmail();
        this.del = member.isDel();
        this.social = member.isSocial();
        this.roleNames = member.getRoleSet().stream().map(role -> role.name()).collect(Collectors.toList());

    }

    //소셜 로그인시에 사용
    public MemberDTO(String email, String mpw){

        this.mid = email;
        this.mpw = mpw;
        this.email = email;
        this.social = true;
        this.roleNames = List.of("USER");
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return roleNames.stream().map(name -> new SimpleGrantedAuthority("ROLE_"+name)).collect(Collectors.toList());
    }

    @Override
    public String getPassword() {

        return this.mpw;
    }

    @Override
    public String getUsername() {

        System.out.println("--------------getUsername");

        return this.mid;
    }

    @Override
    public String getName() {
        return this.mid;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return Map.of();
    }
}
