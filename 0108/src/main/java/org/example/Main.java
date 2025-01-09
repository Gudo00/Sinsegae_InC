package org.example;

import org.example.calc.Calc1;
import org.example.knn.Point;
import org.example.lotto.LottoBall;
import org.example.save.PiggySave;
import org.example.snakegame.Tile;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {


//    public static double calcDistance(Point p1, Point p2) {
//
//        double result = 0;
//
//        result = Math.sqrt(
//                Math.pow(p1.xpos - p2.xpos, 2) +
//                        Math.pow(p1.ypos - p2.ypos, 2)
//        );
//        return result;
//    }


    public static void main(String[] args) {

        // 준비물
        ArrayList<Tile> tiles = new ArrayList<>();

        for(int i = 1; i <= 100; i++) {
            Tile tile = new Tile(i);
            tiles.add(tile);
        }
        System.out.println(tiles);

        // 현재 위치를 알아야 함.
        int current = 0;
        Scanner scanner = new Scanner(System.in);

        while(true) {
        // 로직
        System.out.println("🎲 주사위 굴리기 : Enter.");
        scanner.nextLine();

        // 주사위 굴리기 - value
        int value = Calc1.roll();
        System.out.println("주사위 값은 : " + value);

        // current + 주사위의 수 (value)
            current = current + value;
            System.out.println("현재 위치 : " + current);

        // 만일 current + value의 값이 전체 99보다 크면 break;
            if (current > 99) {
                System.out.println("Game over");
                break;
            }
        }

//        PiggySave my = new PiggySave();
//        PiggySave your = new PiggySave();
//
//        my.deposit(1000);
//        my.deposit(3000);
//        my.deposit(5000); // 9000
//
//        your.deposit(500);
//        your.deposit(1000);
//
//        System.out.println(my.withdraw());
//        System.out.println(your.withdraw());
//
//        System.out.println(Calc1.plus(10,20));
//
//        System.out.println(Math.random()); //0.0 ~0.99999

//        Point p1 = new Point(1,1);
//        Point p2 = new Point(5,5);
//
//        double distance = calcDistance(p1, p2);
//
//        System.out.println(distance);
//
//        ArrayList<LottoBall> balls = new ArrayList<>();
//
//        for(int i = 1; i <= 45; i++){
//            balls.add(new LottoBall(i));
//        }
//
//        for (int i = 0; i < 3; i++) {
//            Collections.shuffle(balls);
//            System.out.println(balls.subList(0,6));
//            System.out.println("--------------------");
//            System.out.println(balls.size());
//        }
  }
}