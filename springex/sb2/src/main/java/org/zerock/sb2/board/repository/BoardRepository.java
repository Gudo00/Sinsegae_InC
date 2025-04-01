package org.zerock.sb2.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.sb2.board.entities.BoardEntity;

public interface BoardRepository extends JpaRepository<BoardEntity, Long>, BoardSearch{
  
}
