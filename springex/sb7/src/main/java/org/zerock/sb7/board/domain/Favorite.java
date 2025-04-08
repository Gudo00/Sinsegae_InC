package org.zerock.sb7.board.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@ToString(exclude = "board")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer fid;

    private String mid;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;

    private Choice choice;

}







