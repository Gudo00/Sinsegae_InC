package org.example.costcalculator;

import org.example.costcalculator.transfer.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {

        Map<String, TMoney> tmap = new HashMap<>();
        tmap.put("1", new CarMoney());
        tmap.put("2", new KTXMoney(30000, 50));
        tmap.put("3", new BusMoney(10000, 10, 40000));


        Scanner scanner = new Scanner(System.in);

        System.out.println("거리 입력");

        int distance = Integer.parseInt(scanner.nextLine());

        System.out.println("1. 자동차   2. KTX   3. 고속버스");
        String choice = scanner.nextLine();

        TMoney transfer = tmap.get(choice);

        System.out.println(transfer.calc(distance));



    }
}
