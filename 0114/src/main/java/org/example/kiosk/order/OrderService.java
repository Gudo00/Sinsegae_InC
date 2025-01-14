package org.example.kiosk.order;

import java.util.ArrayList;

public enum OrderService {
    // 몇 개나 미리 만들것인가?
    INSTANCE;

    private ArrayList<Order> orders;

    private OrderService() {
        orders = new ArrayList<>();
    }

    // 주문을 받는다 (추가한다)
    public void addOder(Order order) {
        orders.add(order);
    }
}
