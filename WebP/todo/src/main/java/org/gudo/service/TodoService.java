package org.gudo.service;

import org.gudo.dao.TodoDAO;
import org.gudo.dto.TodoAddDTO;
import org.gudo.dto.TodoDTO;
import org.gudo.dto.TodoListDTO;

public enum TodoService {
	
	INSTANCE;
	
	public void add(TodoAddDTO dto)throws Exception{
	
		TodoDAO.INSTANCE.insert(dto);
		
	}
	
	public java.util.List<TodoListDTO> getList(int page) throws Exception {
		
		return TodoDAO.INSTANCE.list(page);
	}
	
	public int getTotal() throws Exception {
		return TodoDAO.INSTANCE.getTotal();
	}
	
	public TodoDTO read(int tno) throws Exception {

		return TodoDAO.INSTANCE.selectOne(tno);

	}

	public TodoDTO getTodoByTno(int i) throws Exception {
		return TodoDAO.INSTANCE.selectOne(i);
	}
	
}