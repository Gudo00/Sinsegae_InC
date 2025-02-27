package org.example.kiosk;

import lombok.extern.log4j.Log4j2;
import org.example.kiosk.menu.Menu;
import org.example.kiosk.menu.MenuService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

@Log4j2
public class SampleTests {

    @Test
    public void test1(){

        java.util.ArrayList<Menu> menuArrayList= MenuService.INSTANCE.getList();

        menuArrayList.forEach( m -> log.info(m));

    }

    @Test
    public void test2(){

    }

}
