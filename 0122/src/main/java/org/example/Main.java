package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < 10; i++) {
            System.out.println("숫자 입력");
            try{
                int num = Integer.parseInt(scanner.nextLine());
                System.out.println(num);
                System.out.println("-------------");
            }catch(Exception e){
                System.out.println();
            }



        }

    }
}