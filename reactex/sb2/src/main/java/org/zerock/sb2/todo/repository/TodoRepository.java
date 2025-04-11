package org.zerock.sb2.todo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.zerock.sb2.todo.dto.TodoDTO;
import org.zerock.sb2.todo.entities.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long>, TodoSearch{


  @Query("select t from Todo t where t.title like %:title% ")//SQL이 아님
  Page<Todo> listOfTitle( @Param("title") String title, Pageable pageable);


  @Query("select new org.zerock.sb2.todo.dto.TodoDTO(t.tno, t.title, t.writer, t.regDate, t.modDate) from Todo t where t.tno = :tno")
  TodoDTO selectDTO( @Param("tno") Long tno  );
  
}