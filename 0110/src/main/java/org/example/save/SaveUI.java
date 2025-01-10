package org.example.save;

import java.util.Scanner;

public class SaveUI {

    private SaveService service;
    private Scanner scanner;

    public SaveUI(){
        this.service = new SaveService();
        this.scanner = new Scanner(System.in);
    }

    public void doJob() {

        outer:
        while (true) {
            // 입금 1. 출금 2
            System.out.println("1. 입금   2. 출금    (종료 = -1)");
            String oper = scanner.nextLine();

            switch (oper) {
                case "1":
                    System.out.println("입금 금액 입력.");
                    int value = Integer.parseInt(scanner.nextLine());

                    int current =  this.service.in(value);

                    System.out.println("현재 잔고는 : " + current);
                    break;

                case "2":
                    System.out.println("출금 금액 입력.");
                    value = Integer.parseInt(scanner.nextLine());

                    current =  this.service.out(value);

                    System.out.println("현재 잔고는 : " + current);
                    break;

                case "-1":
                    break outer;
            }
        }
    }
}
