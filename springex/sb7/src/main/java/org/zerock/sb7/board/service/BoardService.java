package org.zerock.sb7.board.service;

import org.zerock.sb7.board.dto.BoardListDTO;
import org.zerock.sb7.board.dto.PageRequestDTO;
import org.zerock.sb7.board.dto.PageResponseDTO;

public interface BoardService {

    PageResponseDTO<BoardListDTO> list(PageRequestDTO pageRequestDTO, boolean withDetails);
}
