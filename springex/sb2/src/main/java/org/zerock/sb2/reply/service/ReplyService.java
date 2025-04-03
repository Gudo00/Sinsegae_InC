package org.zerock.sb2.reply.service;

import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.board.entities.BoardEntity;
import org.zerock.sb2.reply.dto.ReplyAddDTO;
import org.zerock.sb2.reply.dto.ReplyListDTO;
import org.zerock.sb2.reply.dto.ReplyReadDTO;
import org.zerock.sb2.reply.entities.ReplyEntity;
import org.zerock.sb2.reply.exception.ReplyException;

public interface ReplyService {

    Long add(ReplyAddDTO addDTO)throws ReplyException;

    ReplyReadDTO get(Long rno)throws ReplyException;

    PageResponseDTO<ReplyListDTO> getListOfBoard(
            Long bno,
            PageRequestDTO requestDTO)throws ReplyException;

    default ReplyEntity dtoToEntity(ReplyAddDTO addDTO){

        return ReplyEntity.builder()
                .replyText(addDTO.getReplyText())
                .replyer(addDTO.getReplyer())
                .board(BoardEntity.builder().bno(addDTO.getBno()).build())
                .build();
    }

}
