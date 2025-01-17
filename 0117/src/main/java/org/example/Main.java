package org.example;

import org.example.service.MegaCoffeeMenuService;
import org.example.service.MenuService;
import org.example.service.MenuServiceImpl;
import org.example.ui.BasicUI;
import org.example.ui.MenuUI;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

//        List<Menu> menus = new ArrayList<>();
//        menus.add(new KoreanMenu(1,"삼겹살", 12000, 1));
//        menus.add(new KoreanMenu(2,"목살", 12000, 1));
//        menus.add(new KoreanMenu(3,"항정살", 12000, 1));
//        menus.add(new KoreanMenu(4,"돼지갈비", 12000, 1));
//        menus.add(new PizzaMenu(1,"Super Pizza", 30000, PizzaSize.M));
//        menus.add(new PizzaMenu(2,"Cheese Pizza", 30008, PizzaSize.M));
//        menus.add(new PizzaMenu(3,"Pineapple Pizza", 30060, PizzaSize.M));
//        menus.add(new PizzaMenu(4,"Sausage Pizza", 30500, PizzaSize.M));
//        menus.add(new PizzaMenu(5,"Bacon Pizza", 30300, PizzaSize.M));
//
//        menus.add(new DrinkMenu(6,"Cola", 1000, true));
//        menus.add(new DrinkMenu(7,"Americano", 1000, true));

        Scanner scanner = new Scanner(System.in);
        MenuService service = new MegaCoffeeMenuService();

        MenuUI menuUI = new MenuUI(scanner,service);

        menuUI.execute();

    }
}