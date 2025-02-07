package org.gudo.dao;

import org.gudo.dto.TodoAddDTO;
import org.gudo.dto.TodoDTO;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class TodoDAOTests {

	@Test
	public void test1()throws Exception {
		
		long start = System.currentTimeMillis();
		
		for(int i = 0; i < 20; i++) {

			String now = TodoDAO.INSTANCE.makeConnection();
			
			System.out.println(now);	
		}
		
		long end = System.currentTimeMillis();
		
		System.out.println(end - start);
		
	}
	
	@Disabled
	@Test
	public void testInsert()throws Exception {
		
		TodoAddDTO dto = new TodoAddDTO();
		dto.setTitle("한글 Test Code Title");
		dto.setWriter("user00");
		
		TodoDAO.INSTANCE.insert(dto);
		
	}
	
	@Test
	public void testList()throws Exception{
		
		System.out.println(TodoDAO.INSTANCE.list(1));
		
	}
	
	@Test
	public void testSelectOne() throws Exception {
		
		int tno = 1376188;
		
		TodoDTO dto = TodoDAO.INSTANCE.selectOne(tno);
		System.out.println(dto);
		
	}
	
	
}

