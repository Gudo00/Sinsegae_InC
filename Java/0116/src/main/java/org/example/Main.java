package org.example;

import org.example.menu.*;
import org.example.store.*;
import org.jsoup.*;

import java.util.*;

public class Main {
    public static void main(String[] args)throws Exception {

        List<LottoBall> balllist = new ArrayList<>(); // List로 타입을 잡아서 Array, Liked 듈 다 포함. 현재는 Array라 끝에 선언.

        for (int i = 1; i <= 45; i++){ // 번호 1 ~ 45 넣기
            balllist.add(new LottoBall(i));
        }

        Collections.shuffle(balllist); // 섞기

        List<LottoBall> result = balllist.subList(0,6);// 0부터 6까지 끊기

        result.sort((z1, z2) -> z1.getNum() - z2.getNum()); // 람다식. 정렬

        System.out.println(result);


//        HashMap<String, MenuService> map = new HashMap<>();
//
//        map.put("mega", new MegaMenuService());
//        map.put("compose", new ComposeMenuService());
//
//        MenuService menuService = map.get("mega");
//        menuService.getMenuList();
//
//
//        String url = "https://www.mega-mgccoffee.com/menu/menu.php?menu_category1=1&menu_category2=1&category=&list_checkbox_all=all";
//        Document doc = Jsoup.connect(url).get();
//
////      System.out.println(doc);
//
//        Element element = doc.selectFirst("#menu_list");
////      System.out.println(element);
//
//        Elements names = doc.select(".text1 b");
//        List<String> namelist = names.eachText();
//        System.out.println(namelist); // 메가커피 Crawling

//        Document doc = Jsoup.connect("https://composecoffee.com/menu?amp%3Bcategory=185").get();
//
////      System.out.println(doc); 페이지 전체
//
//        Element element = doc.selectFirst("#masonry-container");
////      System.out.println(element);
//
//        Elements names = element.select("h4");
//        System.out.println(names);
//
//        List<String> namelist = names.eachText();
//        System.out.println(namelist); // 컴포즈 Crawling



//        HashMap<String,BasicRes> resHashMap = new HashMap<>();
//
//        Menu m = new Coffee();

//        resHashMap.put("서울", new BasicRes());
//        resHashMap.put("부산", new BusanRes());
//        resHashMap.put("대구", new DaeguRes());
//
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("도시를 입력하세요.");
//        String city = scanner.nextLine();
//
//        BasicRes target = resHashMap.get(city);
//
//        target.makeZazang();

//        ArrayList<BasicRes> resList = new ArrayList<>();
//
//        resList.add(new BasicRes());
//        resList.add(new BusanRes());
//        resList.add(new DaeguRes());
//
//        resList.forEach(r ->{
//            r.makeZazang();
//        });

    }
}