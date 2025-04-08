package org.zerock.sb7.board.domain;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Embeddable
@Setter
@ToString
@Getter
public class BoardImage {

    private String fileName;

    private int ord;


}
