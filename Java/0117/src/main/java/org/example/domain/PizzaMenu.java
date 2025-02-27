package org.example.domain;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class PizzaMenu extends Menu{

    private PizzaSize size;

    public PizzaMenu(int mno, String name, int price, PizzaSize size) {
        super(mno, name, price);
        this.size = size;
    }

}