package org.example;

public class ifTest {

    public static void main(String[] args) {

        //랜덤 int 값 (0.0 ~ 0.9999 * 6) + 1 = 5.9999 + 1 (1 ~ 6)
        int value = (int) (Math.random() * 6) + 1;


        int oddEven = value % 2; // 2로 나눈 나머지. (0,1)

        String result = oddEven == 1 ? "홀수" : "짝수" ; // 삼항연산자 조건식 (결과) ? 참인 경우 결과 : 거짓인 경우

        System.out.println(result);

       /* if (oddEven == 0) {
            System.out.println("짝! 값  = "  + value); // 만약 oddEven 값이 0이면 짝 출력 ==> boolean (참/거짓)
        }
        else {
            System.out.println("홀! 값 = " + value); // 만약 oddEven 값이 1이면 홀 출력
        } */
    }
}

