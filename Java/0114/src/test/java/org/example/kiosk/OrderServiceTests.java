package org.example.kiosk;

import lombok.extern.log4j.Log4j2;
import org.example.kiosk.order.Order;
import org.example.kiosk.order.OrderItem;
import org.example.kiosk.order.OrderService;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

@Log4j2
public class OrderServiceTests {

    @Test
    public void testAddOrder() {

        Order order = new Order();

        OrderItem item1 = OrderItem.builder().menuNo(1).qty(1).build();
        OrderItem item2 = OrderItem.builder().menuNo(2).qty(3).build();

        order.addOrderItem(item1);
        order.addOrderItem(item2);

        int orderNum = OrderService.INSTANCE.addOrder(order);

        log.info("주문번호: " + orderNum);

    }

}
