package org.example.kiosk.order;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class OrderItem {
    // 메뉴 번호, 수량, 두 개의 데이터로 구성 됨.

    private int menuNo;
    private int qty;

}
