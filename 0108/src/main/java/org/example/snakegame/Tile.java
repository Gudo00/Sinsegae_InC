package org.example.snakegame;

import lombok.*;

@Getter
@ToString
public class Tile {
    private int num; // 타일 번호

    public Tile(int num){
        this.num = num;
    }



    /* public int getNum() {
        return num;
    } */ //Getter
}

