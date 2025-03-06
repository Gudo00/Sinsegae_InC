package org.example.kiosk;

public class Main {
    public static void main(String[] args) {
        KioskUI ui = new KioskUI();
        ui.greeting();
        ui.makeOrder();
        ui.thanks();
    }
}
