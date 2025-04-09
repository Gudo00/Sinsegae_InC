package org.zerock.sb7.board.domain;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.BatchSize;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@ToString(exclude = {"images","tags"})
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bno;

    private String title;

    private String content;

    private String writer;

    @ElementCollection(fetch = FetchType.LAZY)
    @BatchSize(size = 100)
    @Builder.Default
    private List<BoardImage> images = new ArrayList<>();

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "board_tags", joinColumns = @JoinColumn(name = "board_bno"))
    @BatchSize(size = 100)
    @Builder.Default
    private List<String> tags = new ArrayList<>();



    public void addImage(String fileName){
        BoardImage image = new BoardImage();
        image.setFileName(fileName);
        image.setOrd(images.size());
        images.add(image);
    }

    public void clearImages(){
        images.clear();
    }


}
