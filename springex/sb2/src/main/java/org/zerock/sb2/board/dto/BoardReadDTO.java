package org.zerock.sb2.board.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class BoardReadDTO {
  
  private Long bno;

  private String title, content, writer;

  private boolean delFlag;

  private long viewCnt;

  private LocalDateTime regDate, modDate;

  //bno, title, content, writer, delFlag, viewCnt, regDate, modDate

  public BoardReadDTO(Long bno, String title, String content, String writer, boolean delFlag, long viewCnt,
      LocalDateTime regDate, LocalDateTime modDate) {
    this.bno = bno;
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.delFlag = delFlag;
    this.viewCnt = viewCnt;
    this.regDate = regDate;
    this.modDate = modDate;
  }

  

}
