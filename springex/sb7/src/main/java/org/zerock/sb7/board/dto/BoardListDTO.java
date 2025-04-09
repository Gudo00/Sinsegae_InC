package org.zerock.sb7.board.dto;

import lombok.Data;

@Data
public class BoardListDTO {

    private Integer bno;
    private String title;
    private String writer;
    private String fileName;
    private long favoriteCount;
    private long replyCount;

}