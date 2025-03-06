package org.example.kiosk.order;

import lombok.Setter;

import java.util.ArrayList;

@Setter
public class Order {

    private int Ono; // 주문 번호
    private ArrayList<OrderItem> orderItemList;

    public Order() {
        orderItemList = new ArrayList<>();
    }

    // 새로운 OrderItem을 추가
    public void addOrderItem(OrderItem newItem) {
        orderItemList.add(newItem);
    }

}
