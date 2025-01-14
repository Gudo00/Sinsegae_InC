package org.example.vending.lots;

import java.util.Scanner;

public class LotsUI {

    public void startGame(){

        Scanner scanner = new Scanner(System.in);

        while(true){
            System.out.println("마음의 준비를 하시고 Enter");
            scanner.nextLine();

            String note = LotsBox.INSTANCE.getNext();

            System.out.println(note);

            if(note.equals("당첨")){
                break;
            }

        }//end while
    }
}