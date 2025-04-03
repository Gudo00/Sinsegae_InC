package org.zerock.sb2.reply.entities;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.zerock.sb2.board.entities.BoardEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@EntityListeners(value = AuditingEntityListener.class)
@Entity
@Table(name = "tbl_reply" , indexes = {
  @Index(name = "idx_board", columnList = "board_bno")
})
@Getter
@ToString(exclude = {"board"})
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReplyEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long rno;

  private String replyText;

  private String replyer;

  @ManyToOne(fetch = FetchType.LAZY)
  private BoardEntity board;

  @CreatedDate
  @Column(name = "regdate", updatable = false)
  protected LocalDateTime regDate;

  @LastModifiedDate
  @Column(name ="moddate" )
  protected LocalDateTime modDate;

  public void changeReplyText(String text){
    this.replyText = text;
  }
  
}
