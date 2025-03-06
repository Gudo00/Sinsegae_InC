package org.example.kiosk.order;

import java.util.ArrayList;


public enum OrderService {
    INSTANCE;

    private ArrayList<Order> orders;
    private int idx;

    private OrderService(){
        orders = new ArrayList<>();
    }

    public int addOrder(Order order){
        idx++;
        order.setOno(idx);
        orders.add(order);
        return idx;
    }
}
