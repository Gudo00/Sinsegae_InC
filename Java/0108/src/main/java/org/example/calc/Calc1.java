package org.example.calc;

public class Calc1 {

    // f(x) -> y에 해당
    public static int plus(int x, int y) {

        return x + y;
    }
    public static int roll(){
        int result = 0;
        result = (int)(Math.random() * 6) + 1;

        return result;
    }
}
