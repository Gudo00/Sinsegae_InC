package org.example.util;

import java.util.Scanner;

public enum ScanUtil {

    ONE;

    private Scanner scanner;

    private ScanUtil() {
        this.scanner = new Scanner(System.in);
    }

    public String input(String msg){
        System.out.println(msg);
        return this.scanner.nextLine();
    }

    public int inputInt(String msg){
        return Integer.parseInt(input(msg));
    }
}
