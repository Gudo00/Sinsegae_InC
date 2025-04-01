package org.zerock.sb2.board.service;

import org.zerock.sb2.board.dto.BoardListDTO;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;

public interface BoardService {
  
  PageResponseDTO<BoardListDTO> list(PageRequestDTO requestDTO);

}
