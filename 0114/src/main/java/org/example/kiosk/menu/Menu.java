package org.example.kiosk.menu;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@ToString
public class Menu {

    private int num;
    private String name;
    private int price;

}