package org.zerock.sb2.board.entities;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@EntityListeners(value = AuditingEntityListener.class)
@Entity
@Table(name = "tbl_board")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long bno;

  @Column(nullable = false, length = 500)
  private String title;

  @Column(nullable = false, length = 2000)
  private String content;

  @Column(nullable = false, length = 50)
  private String writer;

  private boolean delFlag;

  private int viewCnt;
  
  @CreatedDate
  @Column(name = "regdate", updatable = false)
  protected LocalDateTime regDate;

  @LastModifiedDate
  @Column(name ="moddate" )
  protected LocalDateTime modDate;
}
