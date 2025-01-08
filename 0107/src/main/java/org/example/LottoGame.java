package org.example;

import java.util.Arrays;
import java.util.Scanner;

public class LottoGame {
    public static void main(String[] args) {

        int[] balls = new int[45]; // 1 ~ 45 랜덤 숫자
        int[] goal = new int[6]; // 당첨 번호
        int[][] log; // 구매한 번호 [구매 횟수][번호 6개]

        int input; // 입력 금액
        int purchase; // 구매한 수
        int change; // 거스름 돈

        Scanner scanner = new Scanner(System.in);

        System.out.print("🎊 복권(장 당 5000원) 구매금 입력 : ");
        input = scanner.nextInt();
        scanner.close();

        purchase = input / 5000;
        change = input % 5000;

        System.out.println("💸 " + input + "원 지불. " + purchase + "장 구매, " + "거스름돈 : " + change);
        System.out.println(" ");

        log = new int[purchase][6]; // 구매한 복권 번호

        for (int i = 0; i < purchase; i++) {

            for (int j = 0; j < balls.length; j++) {
                balls[j] = j + 1;
            }

            System.out.print(i + 1 + "번째 복권 번호 : ");

            int value = 0;
            int rdm;
            for (int k = 0; k < 6; ) {

                rdm = (int) (Math.random() * 45); // 0 ~ 44
                value = balls[rdm];

                if (value == -1) {
                    continue;
                }

                log[i][k] = value; // 구매한 복권 번호 저장

                System.out.print(log[i][k] + " ");

                balls[rdm] = -1; // 중복이라면 -1로 대체
                k++;
            }

            System.out.println(" ");
        } // 구매한 복권 번호 생성

        {
            for (int i = 0; i < goal.length; i++) {
                int rdm;
                boolean duplicate;
                do {
                    rdm = (int) (Math.random() * 45); // 0 ~ 44
                    duplicate = false;
                    // 중복 확인
                    for (int j = 0; j < i; j++) {
                        if (goal[j] == rdm + 1) { // 1 ~ 45 값으로 변환
                            duplicate = true; // 중복이 있으면 다시 시도
                            break;
                        }
                    }
                } while (duplicate);
                goal[i] = rdm + 1; // 1 ~ 45 값으로 변환
            }
            Arrays.sort(goal);

            System.out.println(" ");
            System.out.println("✌️ 당첨 번호 : " + Arrays.toString(goal));
        } // 당첨 번호 생성

        for (int i = 0; i < purchase; i++) {
            int count = 0;
            for (int j = 0; j < 6; j++) {
                for (int k = 0; k < 6; k++) {
                    if (log[i][j] == goal[k]) {
                        count++;
                    }
                }
            }
            switch (count) {
                case 3:
                    System.out.println(i + 1 + "번째 복권 5등 당첨! 🎉");
                    break;
                case 4:
                    System.out.println(i + 1 + "번째 복권 4등 당첨! 🎉");
                    break;
                case 5:
                    System.out.println(i + 1 + "번째 복권 3등 당첨! 🎉");
                    break;
                case 6:
                    System.out.println(i + 1 + "번째 복권 1등 당첨! 🎉");
                    break;
                default:
                    System.out.println(i + 1 + "꽝");
                    break;
            }
        }
    }
}
