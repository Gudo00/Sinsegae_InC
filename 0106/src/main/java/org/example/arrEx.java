package org.example;
import java.util.Scanner;

class Item {
    String name;
    int amount;

    public Item(String name, int amount) {
        this.name = name;
        this.amount = amount;
    }
}

public class arrEx {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Item[] items = new Item[5];
        int res = 0;

        for (int i = 0; i < items.length; i++) {
            System.out.println((i + 1)+"번째 이름 입력 "  + ":");
            String name = scanner.nextLine();

            System.out.println((i + 1)+ "번쨰 금액 입력 " + ":");
            int amount = scanner.nextInt();
            scanner.nextLine();

            items[i] = new Item(name, amount);
        }

        scanner.close();

        for (Item item : items) {
            System.out.println(item.name + " " + item.amount);
            res += item.amount;
        }
        System.out.println("\n남은 금액 :" + res);
    }
}