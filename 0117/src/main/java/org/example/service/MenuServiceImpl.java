package org.example.service;

import org.example.domain.*;

import java.util.ArrayList;
import java.util.List;

public class MenuServiceImpl implements MenuService{

    private List<Menu> menus;

    public MenuServiceImpl() {
        menus = new ArrayList<Menu>();

        menus.add(new KoreanMenu(1,"삼겹살", 12000, 1));

//        menus.add(new PizzaMenu(1, "Super Pizza", 30000, PizzaSize.M));
//        menus.add(new PizzaMenu(2, "Cheese Pizza", 20000, PizzaSize.L));
//        menus.add(new PizzaMenu(3, "Pineapple Pizza", 10000, PizzaSize.F));
//        menus.add(new PizzaMenu(4, "Pepperoni Pizza", 25000, PizzaSize.L));
//        menus.add(new PizzaMenu(5, "Bacon Pizza", 27000, PizzaSize.M));
//
//        menus.add(new DrinkMenu(6, "Cola", 1000, true));
//        menus.add(new DrinkMenu(7, "Americano", 1000, true));

    }

    @Override
    public List<Menu> getMenus() {
        return this.menus;
    }
}
