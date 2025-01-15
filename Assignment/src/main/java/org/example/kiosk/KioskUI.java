package org.example.kiosk;

import org.example.kiosk.menu.Menu;
import org.example.kiosk.menu.MenuService;
import org.example.kiosk.order.Order;
import org.example.kiosk.order.OrderItem;
import org.example.kiosk.order.OrderService;

import java.util.ArrayList;
import java.util.Scanner;


public class KioskUI {
    public void greeting(){
        System.out.println("☕ 안녕하세요 ! ");
        System.out.println();
    }

    public void makeOrder(){
        Scanner scanner = new Scanner(System.in);
        Order order = new Order();
        while(true){
            ArrayList<Menu> menus = MenuService.INSTANCE.getMenu();
            menus.forEach(m -> System.out.println(m));
            System.out.println("*-------------------*");
            System.out.println("메뉴 번호를 입력하세요.");
            int num = Integer.parseInt(scanner.nextLine());
            System.out.println("수량을 입력하세요.");
            int qty = Integer.parseInt(scanner.nextLine());
            OrderItem orderItem = OrderItem.builder().menuNo(num).qty(qty).build();
            order.addOrderItem(orderItem);
            System.out.println("이어서 주문하기. Y/N");

            String ans = scanner.nextLine();

            if(ans.equals("N")){
                break;
            }
        }
        int num = OrderService.INSTANCE.addOrder(order);
        System.out.println("주문 번호 " + num);

    }

    public void thanks(){
        System.out.println("🤗 감사합니다, 안녕히 가세요 !");
    }
}
