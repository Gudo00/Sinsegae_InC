package org.example;
import java.lang.reflect.Method;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {

        System.out.println("실행하고 싶은 메서드");

        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();

        Sample obj = new Sample();


        Class clz = obj.getClass();

        // java.lang.reflect.Method
        Method method = clz.getDeclaredMethod(name);

        method.invoke(obj); // invoke = 메소드 실행

    }
}