package org.zerock.sb2.board.entities;


import jakarta.persistence.*;
import org.zerock.sb2.category.entities.CategoryEntity;

@Entity
public class BoardCategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bcno;

    @ManyToOne(fetch = FetchType.LAZY)
    private CategoryEntity category;

    @ManyToOne(fetch = FetchType.LAZY)
    private BoardEntity board;
}
