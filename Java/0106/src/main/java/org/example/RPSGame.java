package org.example;

import java.util.Scanner;

public class RPSGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("가위(0), 바위(1), 보(2). 시작 !");

        int userWins = 0; // 사용자의 승리 횟수
        int comWins = 0;  // 컴퓨터의 승리 횟수

        while (userWins < 2 && comWins < 2) { // 누군가 2승에 도달할 때까지 반복
            System.out.print("숫자를 입력하세요 (가위: 0, 바위: 1, 보: 2): ");

            int user = Integer.parseInt(scanner.nextLine());
            int com = (int) (Math.random() * 3); // 0, 1, 2 중 랜덤 값 생성

            System.out.println("컴퓨터의 선택: " + (com == 0 ? "가위" : com == 1 ? "바위" : "보"));
            System.out.println(" ");

            // 사용자와 컴퓨터의 선택을 비교하여 결과 계산
            if (user < 0 || user > 2) {
                System.out.println("잘못된 입력입니다. 가위(0), 바위(1), 보(2) 중 하나를 입력하세요.");
                continue;
            }

            int result = (user - com + 3) % 3; // 결과 계산: 0 = 무승부, 1 = 사용자 승리, 2 = 컴퓨터 승리

            switch (result) {
                case 0: // 무승부
                    System.out.println("무승부입니다!");
                    break;
                case 1: // 사용자 승리
                    System.out.println("사용자가 이겼습니다!");
                    userWins++;
                    break;
                case 2: // 컴퓨터 승리
                    System.out.println("컴퓨터가 이겼습니다!");
                    comWins++;
                    break;
            }
            System.out.println("현재 스코어 - 사용자: " + userWins + "승, 컴퓨터: " + comWins + "승");
            System.out.println(" ");
        }
        // 최종 결과 출력

        if (userWins == 2) {
            System.out.println("🎉 사용자 승리!");
        } else {
            System.out.println("💻 컴퓨터 승리!");
        }
        scanner.close();
    }
}