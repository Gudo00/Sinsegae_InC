package org.zerock.sb2.board.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.sb2.board.dto.BoardListDTO;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
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
  
}
