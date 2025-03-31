package org.zerock.sb2.todo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

//테이블 용도 
//@Table 생략시에는 클래스 이름이 테이블 이름 
@Entity
@Table(name = "tbl_todo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class Todo extends BaseEntity{

  //모든 엔티티는 반드시 Id가 존재 
  //PK는 반드시 객체타입(기본자료형 사용불가)
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long tno;
  
  @Column(nullable = false, length = 300)
  private String title;

  private String writer;

  //JPA는 가능하면 엔티티 객체를 readonly로 하는 것을 권장 
  //변경하고 싶을때는 setxxx가 아니라 별도의 메서드를 이용함(필수는 아님)

  public void changeTitle(String title){
    this.title = title;
  }

}
