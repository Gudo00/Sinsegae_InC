package org.example.ui;

import lombok.RequiredArgsConstructor;

import java.util.Scanner;


@RequiredArgsConstructor
public abstract class BasicUI {

    private final Scanner scanner;

    public String input(String msg){
        System.out.println(msg);

        return scanner.nextLine();
    }

    public int inputInt(String msg){
        return Integer.parseInt(input(msg));
    }

    public abstract void execute();


}