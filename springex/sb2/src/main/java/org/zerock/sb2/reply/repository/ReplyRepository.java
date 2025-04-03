package org.zerock.sb2.reply.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.zerock.sb2.reply.dto.ReplyListDTO;
import org.zerock.sb2.reply.dto.ReplyReadDTO;
import org.zerock.sb2.reply.entities.ReplyEntity;

public interface ReplyRepository extends JpaRepository<ReplyEntity, Long>, ReplySearch{

  @Query("select new org.zerock.sb2.reply.dto.ReplyReadDTO(r) from ReplyEntity r where r.rno = :rno ")
  ReplyReadDTO selectOne( @Param("rno") Long rno);

  @Modifying
  @Query("update ReplyEntity r SET r.replyText = :text , r.modDate = CURRENT_TIMESTAMP  WHERE r.rno = :rno  ")
  int updateOne( @Param("text") String text, @Param("rno") Long rno );

  @Modifying
  @Query("delete from ReplyEntity r WHERE r.rno = :rno")
  int deleteOne (@Param("rno") Long rno);

  @Query("select r from ReplyEntity r where r.board.bno = :bno ")
  Page<ReplyEntity> listOfBoard(@Param("bno") Long bno, Pageable pageable );

  @Query("select r.rno, r.replyText, r.replyer, r.board.bno , r.regDate, r.modDate from ReplyEntity r where r.board.bno = :bno ")
  Page<Object[]> listOfBoard2(@Param("bno") Long bno, Pageable pageable );

  @Query("select new org.zerock.sb2.reply.dto.ReplyListDTO(r.rno, r.replyText, r.replyer, r.board.bno , r.regDate, r.modDate) from ReplyEntity r where r.board.bno = :bno ")
  Page<ReplyListDTO> listOfBoard3(@Param("bno") Long bno, Pageable pageable );
}
