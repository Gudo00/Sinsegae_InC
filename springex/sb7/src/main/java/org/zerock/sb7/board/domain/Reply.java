package org.zerock.sb7.board.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.BatchSize;

@Entity
@Getter
@ToString(exclude = "board")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer rno;

    private String str;

    private String mid;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;


}
