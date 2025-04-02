package org.zerock.sb2.board.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.sb2.board.dto.BoardListDTO;
import org.zerock.sb2.board.dto.BoardRegisterDTO;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.board.entities.BoardEntity;
import org.zerock.sb2.board.repository.BoardRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Transactional
@Service
@RequiredArgsConstructor
@Log4j2
public class BoardServiceImpl implements BoardService{

  private final BoardRepository repository;

  @Override
  public PageResponseDTO<BoardListDTO> list(PageRequestDTO requestDTO) {
    
    return repository.list(requestDTO);
  }


  @Override
  public Long register(BoardRegisterDTO dto) {
    log.info("Registering new board post: {}", dto);

    // DTO -> Entity 변환
    BoardEntity entity = BoardEntity.builder()
            .title(dto.getTitle())
            .content(dto.getContent())
            .writer(dto.getWriter())
            .delFlag(false)
            .viewCnt(0)
            .build();

    // DB에 저장
    BoardEntity savedEntity = repository.save(entity);

    return savedEntity.getBno(); // 저장된 게시글 번호 반환
  }
}
