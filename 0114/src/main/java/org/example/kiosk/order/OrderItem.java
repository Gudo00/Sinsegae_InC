package org.example.kiosk.order;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@ToString
public class OrderItem {

    private int menuNo;
    private int qty;
}
