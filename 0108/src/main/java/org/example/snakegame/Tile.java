package org.example.snakegame;

import lombok.*;

@Getter
@Setter
@ToString
public class Tile {
    private int num; // 타일 번호
    private String desc;
    private String type;
    private int moving;

    public Tile(int num){
        this.num = num;
    }



    /* public int getNum() {
        return num;
    } */ //Getter
}

