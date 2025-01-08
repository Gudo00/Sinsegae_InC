package org.example;

import java.util.Arrays;

//TIP 코드를 <b>실행</b>하려면 <shortcut actionId="Run"/>을(를) 누르거나
// 에디터 여백에 있는 <icon src="AllIcons.Actions.Execute"/> 아이콘을 클릭하세요.
public class Main {
    public static void main(String[] args) {

        int[] arr = new int[3];
        System.out.println(arr);

        int[] arr2 = arr; // load, copy, store

        arr[0] = 5;
        arr[1] = 10;
        arr[2] = 20;

        System.out.println(arr[1]);
        System.out.println(arr2[1]);

        System.out.println(Arrays.toString(arr)); // 배열의 내용물 확인
        System.out.println(Arrays.toString(arr2));



        int [] arr3 = new int[6];
        for(int i = 0; i < args.length; i++) {
            int rdm = (int)(Math.random() * 45);
            arr3[i] = rdm;
            System.out.print(" " + arr3[i]);
        }

    }
}