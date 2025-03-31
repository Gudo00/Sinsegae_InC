package org.zerock.sb1.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Todo2 {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long tno;

  private String title;

}
