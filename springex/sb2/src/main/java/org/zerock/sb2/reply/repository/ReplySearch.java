package org.zerock.sb2.reply.repository;

import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.reply.dto.ReplyListDTO;

public interface ReplySearch {

  PageResponseDTO<ReplyListDTO> listQuerydsl( Long bno, PageRequestDTO requestDTO);

}
