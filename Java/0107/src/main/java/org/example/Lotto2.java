package org.example;
import java.util.Arrays;

public class Lotto2 {
    public static void main(String[] args){

        int[] balls = new int[45];

        for(int i = 0; i < balls.length; i++){
            balls[i] = i + 1;
        }

        System.out.println(Arrays.toString(balls));

        for(int i = 0; i < 6;){

            int rdm = (int)(Math.random() * 45);

            int value = balls[rdm]; // 배열의 내용물

            if(value == -1) {
                System.out.println("중복 발생 !");
                continue;
            }

            System.out.println(value);

            balls[rdm] = -1; // 중복이라면 -1로 대체
            i++;
        }
    }
}
