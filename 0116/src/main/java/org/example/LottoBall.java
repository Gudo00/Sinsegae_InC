package org.example;

public class LottoBall {

    private int num;

    public LottoBall(int num) { // 생성자
        this.num = num;
    }

    public int getNum() {
        return num;
    }

    @Override
    public String toString() {
        return "LottoBall{" +
                "num=" + num +
                '}';
    }
}
