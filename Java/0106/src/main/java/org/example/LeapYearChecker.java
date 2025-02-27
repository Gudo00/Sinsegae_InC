package org.example;

import java.util.Scanner;

public class LeapYearChecker {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("년도 입력 : ");
        int year = scanner.nextInt();

        if(year % 400 == 0){  // 범위가 제일 작은 것을 첫 번째로. (좁은 순서부터 넓은 순서까지)
            System.out.println("윤년");
        }
        else if(year % 100 == 0){
            System.out.println("평년");
        }
        else if(year % 4 == 0){
            System.out.println("윤년");
        }
        else{
            System.out.println("평년");
        }
    }
}
