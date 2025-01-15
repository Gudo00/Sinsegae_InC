package org.example.kiosk.menu;

import lombok.Getter;
import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;

@Getter
@Log4j2
public enum MenuService {
    INSTANCE;

    private ArrayList<Menu> menus;
    MenuService() {
        this.menus = new ArrayList<>();
        menus.add(new Menu(1, "아메리카노", 2000));
        menus.add(new Menu(2, "라떼", 290));
        menus.add(new Menu(3, "카푸치노", 2900));
        menus.add(new Menu(4, "에스프레소", 1500));
    }

    public ArrayList<Menu> getMenu() {

        return menus;
    }

}
