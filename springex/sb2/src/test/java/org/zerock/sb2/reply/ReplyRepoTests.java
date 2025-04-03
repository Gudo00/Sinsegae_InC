package org.zerock.sb2.reply;

import java.util.Arrays;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.board.entities.BoardEntity;
import org.zerock.sb2.reply.dto.ReplyListDTO;
import org.zerock.sb2.reply.dto.ReplyReadDTO;
import org.zerock.sb2.reply.entities.ReplyEntity;
import org.zerock.sb2.reply.repository.ReplyRepository;

import lombok.extern.log4j.Log4j2;



@SpringBootTest
@Log4j2
public class ReplyRepoTests {
  
  @Autowired(required = false)
  private ReplyRepository repository;

  @Test
  public void testInsert() {

    for(int i = 0; i < 25; i++){
      //가짜 BoardEntity 필요 
      BoardEntity board = BoardEntity.builder().bno(123L).build();

      ReplyEntity replyEntity = ReplyEntity.builder()
      .replyText("댓글입니다. 댓글입니다.")
      .replyer("user00")
      .board(board)
      .build();

      repository.save(replyEntity);
    }//end for

  }

  @Test
  public void testRead(){

    Long rno = 1L;

    Optional<ReplyEntity> result = repository.findById(rno);

    ReplyEntity reply = result.orElseThrow();

    log.info(reply);

  }

  @Test
  public void testListOfBoard() {

    Long bno = 123L;

    Pageable pageable = PageRequest.of(0,10,Sort.by("rno").descending());

    repository.listOfBoard(bno, pageable);

  }

  @Test
  public void testListOfBoard2() {

    Long bno = 123L;

    Pageable pageable = PageRequest.of(0,10,Sort.by("rno").descending());

    Page<Object[]> result = repository.listOfBoard2(bno, pageable);

    result.getContent().forEach(arr -> log.info(Arrays.toString(arr)));

  }

  @Test
  public void testListOfBoard3() {

    Long bno = 123L;

    Pageable pageable = PageRequest.of(0,10,Sort.by("rno").descending());

    Page<ReplyListDTO> result = repository.listOfBoard3(bno, pageable);

    result.getContent().forEach(dto  -> log.info(dto));

  }

  @Test
  public void testListOfBoardQuerydsl() {

    Long bno = 123L;

    PageRequestDTO requestDTO = new PageRequestDTO(); //1, 10

    PageResponseDTO<ReplyListDTO> res = repository.listQuerydsl(bno, requestDTO);

    log.info(res);
  }

  @Test
  public void testSelectOne() {

    Long rno = 1L;

    ReplyReadDTO dto =  repository.selectOne(rno);

    log.info(dto);

  }

  @Test
  @Transactional
  @Commit
  public void testUpdate() {

    Long rno = 1L;
    String text = "Reply 1 Updated....";

    repository.updateOne(text, rno);


  }



}
