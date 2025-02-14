package org.zerock.listener;

import jakarta.servlet.annotation.WebListener;
import jakarta.servlet.http.HttpSessionEvent;
import jakarta.servlet.http.HttpSessionListener;

@WebListener
public class CurrentSessionListener implements HttpSessionListener{
	
	private int current;

	@Override
	public void sessionCreated(HttpSessionEvent se) {
		
		System.out.println("===================================");
		System.out.println("=====SESSION CREATED ==============================");
		System.out.println(se.getSession().getId());
		System.out.println("===================================");
		
		current++;
		
		se.getSession().getServletContext().setAttribute("CURRENT", current);
		
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
		System.out.println("===================================");
		System.out.println("=====SESSION Destroyed ==============================");
		
		current--;
		se.getSession().getServletContext().setAttribute("CURRENT", current);
		
	}

}
