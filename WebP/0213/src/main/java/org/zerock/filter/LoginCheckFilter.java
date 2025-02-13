package org.zerock.filter;

import java.io.IOException;
import java.util.Arrays;
import java.util.Optional;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class LoginCheckFilter
 */
@WebFilter("/main")
public class LoginCheckFilter extends HttpFilter implements Filter {
       
    /**
     * @see HttpFilter#HttpFilter()
     */
    public LoginCheckFilter() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		
		System.out.println("-------------doFilter...........");
		
		//HTTP를 이용하기 위해서 
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse res = (HttpServletResponse)response;
		
		//로그인한 사용자라면 당연히 login이름을 가지는 쿠키가 있을 것이다. 
		Cookie[] cookies = req.getCookies();
		
		if(cookies == null || cookies.length == 0) {
			res.sendRedirect("/login");
			return;
		}
		
		//for문 돌리면서 cookie의 이름이 login인 쿠키를 찾아야 함 
		//f(x) -> y
		
		Optional<Cookie> result = 
				Arrays.stream(cookies)
				.filter(ck -> ck.getName().equals("login"))
				.findFirst();
		
		if(!result.isPresent()) {
			res.sendRedirect("/login");
			return;
		}
		
		
		chain.doFilter(request, response);
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
