package org.example;

import org.example.lotto.LottoBall;

import java.util.ArrayList;
import java.util.Collections;


public class Main {
    public static void main(String[] args) {


        ArrayList<LottoBall> balls = new ArrayList<>();

        for(int i = 1; i <= 45; i++){
            balls.add(new LottoBall(i));
        }

        for (int i = 0; i < 3; i++) {
            Collections.shuffle(balls);
            System.out.println(balls.subList(0,6));
            System.out.println("--------------------");
            System.out.println(balls.size());
        }





    }
}