package org.example.vending;


//지정된 숫자만큼의 객체만 생성
public enum VM2 {

    INSTANCE, 서면, 부산역;


    private int count;



    public String hello(){
        return "Hello " + count++;
    }

}
