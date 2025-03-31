package org.zerock.sb2.todo.entities;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;


@Getter
@MappedSuperclass
@EntityListeners(value = AuditingEntityListener.class)
public abstract class BaseEntity {
  
    @CreatedDate
    @Column(name = "regdate", updatable = false)
    protected LocalDateTime regDate;

    @LastModifiedDate
    @Column(name ="moddate" )
    protected LocalDateTime modDate;

}
