package org.example.kiosk.order;

import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;

@Log4j2
public enum OrderService {
    //몇개나 미리 만들것인가?
    INSTANCE;

    private ArrayList<Order> orders;

    private int idx;

    private OrderService() {
        orders = new ArrayList<>();
    }

    //주문을 받는다(추가한다)
    public int addOrder(Order order){

        log.info(order);
        log.info("current idx: " + idx);

        idx++;

        order.setOno(idx);

        orders.add(order);

        return idx;
    }
}



