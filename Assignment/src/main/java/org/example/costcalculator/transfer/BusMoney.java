package org.example.costcalculator.transfer;

public class BusMoney extends PublicTMoney{

    private int toolPay;

    public BusMoney(int defualtMoney, int per, int toolPay) {
        super(defualtMoney, per);
        this.toolPay = toolPay;
    }

    @Override
    public int calc(int distance) {
        return defualtMoney  + (distance * per) + toolPay;
    }
}
