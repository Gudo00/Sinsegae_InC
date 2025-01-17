package org.example.service;

import org.example.domain.DrinkMenu;
import org.example.domain.Menu;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.List;
import java.util.stream.Collectors;

public class MegaCoffeeMenuService implements MenuService {

    @Override
    public List<Menu> getMenus() {

        try {
            String url = "https://www.mega-mgccoffee.com/menu/menu.php?menu_category1=1&menu_category2=1&category=&list_checkbox_all=all";
            Document doc = Jsoup.connect(url).get();

            Element element = doc.selectFirst("#menu_list");
            //System.out.println(element);
            Elements names = element.select(".text1 b");

            List<String> nameList = names.eachText();

            return nameList.stream().map(name -> {
                return new DrinkMenu(1, name, 3000, false);
            }).collect(Collectors.toList());

        }catch(Exception e){
            e.printStackTrace();
        }

        return null;
    }
}