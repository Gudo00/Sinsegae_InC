package org.zerock.sb2.todo.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.zerock.sb2.todo.entities.Todo;

public interface TodoSearch {

  List<Todo> list1(Pageable pageable);
  
} 
