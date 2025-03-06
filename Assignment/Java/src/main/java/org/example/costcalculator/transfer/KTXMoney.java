package org.example.costcalculator.transfer;

public class KTXMoney extends PublicTMoney{

    private int defaultPay = 30000;

    public KTXMoney(int defualtMoney, int per) {
        super(defualtMoney, per);
    }

    @Override
    public int calc(int distance) {
        return defaultPay + (distance * per);
    }
}
