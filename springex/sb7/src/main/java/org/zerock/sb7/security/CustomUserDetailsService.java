package org.zerock.sb7.security;

import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class CustomUserDetailsService  implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        log.info("loadUserByUsername: " + username);

        UserDetails sampleUser = User.builder()
                .username(username)
                .password("$2a$10$Hyj0kg7Dl9jaelSNVTdvFO9GbY9L5lUWcMMCrcodu8jEEc/6vcRl.")
                .roles("USER")
                .build();

        return sampleUser;
    }
}
