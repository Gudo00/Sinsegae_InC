package org.example;

public class Sample {

    @Request("doA")
    public void doRunA(){
        System.out.println("doA");
    }
    @Request("doB")
    public  void doRunB(){
        System.out.println("doB");
    }
    @Request("doC")
    public  void doRunC(){
        System.out.println("doC");
    }
}
