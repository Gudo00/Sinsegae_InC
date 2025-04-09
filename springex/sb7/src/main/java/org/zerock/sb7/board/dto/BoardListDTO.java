package org.zerock.sb7.board.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BoardListDTO {

    private Integer bno;
    private String title;
    private String writer;
    private String fileName;
    private long favoriteCount;
    private long replyCount;

    private List<String> tags;
    private List<String> images;

    private List<ReplyDTO> replyDTOList = new ArrayList<>();

    public void addReplyDTO(ReplyDTO replyDTO) {
        replyDTOList.add(replyDTO);
    }

}
