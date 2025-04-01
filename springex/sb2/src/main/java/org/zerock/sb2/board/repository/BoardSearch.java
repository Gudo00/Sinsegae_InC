package org.zerock.sb2.board.repository;

import org.zerock.sb2.board.dto.BoardListDTO;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;

public interface BoardSearch {

  PageResponseDTO<BoardListDTO> list(PageRequestDTO pageRequestDTO);
  
}
