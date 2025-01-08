package org.example;

import java.util.Scanner;

public class CalculatorForYou {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sum = 0;
        int lastvalue= 0;

        while(true){
            System.out.println("값 입력 (되돌아가기 : BACK, 계산 종료 : END)");
            String str = scanner.nextLine();

            if(str.equals("BACK")){
                sum -= lastvalue;
                System.out.println("되돌아가기. 현재 합 = " + sum + ", 입력한 마지막 값 = " + lastvalue);
                continue;
            }

            else if(str.equals("END")){
                break;
            }

            try{
                int value = Integer.parseInt(str);
                lastvalue = value;
                sum += value;
                System.out.println("현재 합 = " + sum);
            } catch (NumberFormatException e) {
                System.out.println("숫자나 BACK, END 둘 중 하나만 입력.");
            }

        }
        System.out.println("최종 값 = " + sum);
    }
}
