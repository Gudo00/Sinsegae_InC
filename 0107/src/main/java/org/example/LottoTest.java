package org.example;
import java.util.Arrays;

public class LottoTest {
    public static void main(String[] args) {

        int[] result = new int[6];
        for (int i = 0; i < result.length; i++) {
            int temp = (int) (Math.random() * 45) + 1;

            // result 배열 안에 temp가 있는지 체크하는 로직 구성

            result[i] = temp;
            System.out.print(" " + result[i]);
        }
        System.out.println(Arrays.toString(result));
    }
}

