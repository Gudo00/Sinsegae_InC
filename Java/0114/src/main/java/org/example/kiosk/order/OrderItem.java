package org.example.kiosk.order;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@ToString
@Builder
public class OrderItem {

    private int menuNo;
    private int qty;

}
