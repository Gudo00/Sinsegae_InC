package org.example.ex2;

import java.util.Scanner;

// 로직 위주의 객체
// 인스턴스 변수 - 조력자/협력자
public class CalcUI {

    Calculator calculator;

    public CalcUI(Calculator calculator) {
        this.calculator = calculator;
    }

    public void startUI(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("num1");
        int num1 = scanner.nextInt();

        System.out.println("num2");
        int num2 = scanner.nextInt();

        System.out.println(calculator.add(num1, num2));
    }
}
