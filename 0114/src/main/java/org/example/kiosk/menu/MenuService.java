package org.example.kiosk.menu;

import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;

@Log4j2
public enum MenuService {

    INSTANCE;

    private ArrayList<Menu> menus;

    //초기화
    MenuService() {
        this.menus = new ArrayList<>();
        menus.add(new Menu(1, "Americano", 3000));
        menus.add(new Menu(2, "Latte", 3500));
        menus.add(new Menu(3, "Cappuccino", 4000));
        menus.add(new Menu(4, "Espresso", 2500));
    }

    public ArrayList<Menu> getList(){

        log.info("getList...called" );
        log.info(menus);

        return menus;
    }


}
