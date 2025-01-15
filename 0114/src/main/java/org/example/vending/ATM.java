package org.example.vending;

public class ATM {

    private static int num;

    public static int pushButton() {

        ATM.num++;
        return ATM.num;
    }

    public static void main(String[] args) {

        ATM.pushButton();

//        ATM m1 = new ATM();
//        ATM m2 = new ATM();
//
//        System.out.println(m1.pushButton());
//
//        System.out.println(m1.pushButton());
//
//        System.out.println(m1.pushButton());
//
//        System.out.println(m1.pushButton());
//
//        System.out.println(m1.pushButton());
//
//        System.out.println("-----------------");
//
//        System.out.println(m2.pushButton());

    }

}

