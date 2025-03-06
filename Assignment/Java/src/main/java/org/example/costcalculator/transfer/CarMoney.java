package org.example.costcalculator.transfer;

public class CarMoney implements TMoney {
    @Override
    public int calc(int distance){
        return distance * 130;
    }
}
