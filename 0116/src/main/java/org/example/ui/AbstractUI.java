package org.example.ui;

import java.util.*;

public class AbstractUI {

    private Scanner scanner;

    public AbstractUI(){
        this.scanner = new Scanner(System.in);
    }

    public String input(String msg){
        System.out.println(msg);
        return scanner.nextLine();
    }

    public int inputInt(String msg){

        return Integer.parseInt(input(msg));
    }


}