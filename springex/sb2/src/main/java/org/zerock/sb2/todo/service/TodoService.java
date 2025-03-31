package org.zerock.sb2.todo.service;

import org.springframework.transaction.annotation.Transactional;
import org.zerock.sb2.todo.dto.TodoDTO;

@Transactional
public interface TodoService {

  TodoDTO getOne(Long tno);

}
