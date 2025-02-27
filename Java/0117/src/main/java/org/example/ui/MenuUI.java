package org.example.ui;

import org.example.service.MenuService;

import java.util.Scanner;

public class MenuUI extends BasicUI{

    private final MenuService service;

    public MenuUI(Scanner scanner, MenuService service) {
        super(scanner);
        this.service = service;
    }

    @Override
    public void execute(){
        System.out.println("🥰 메뉴를 보여드리겠습니다.");
        service.getMenus().forEach(menu -> {

            System.out.println(menu.getMno());
            System.out.println(menu.getName());
            System.out.println(menu.getPrice());
        });

    }

}
