package org.example;

import java.io.BufferedReader;
import java.io.InputStreamReader;

//TIP 코드를 <b>실행</b>하려면 <shortcut actionId="Run"/>을(를) 누르거나
// 에디터 여백에 있는 <icon src="AllIcons.Actions.Execute"/> 아이콘을 클릭하세요.
public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        //오직 br.readLine()만 사용
        String str = br.readLine();

        // 소수 처리
        double value1 = Double.parseDouble(str); // 문자열을 double로 처리

        // 정수 처리
        int value2 = Integer.parseInt(str);
    }
}
