package org.example.costcalculator.transfer;

public abstract class PublicTMoney implements TMoney {

    protected int defualtMoney;
    protected int per;

    public PublicTMoney(int defualtMoney, int per) {
        this.defualtMoney = defualtMoney;
        this.per = per;
    }

}
