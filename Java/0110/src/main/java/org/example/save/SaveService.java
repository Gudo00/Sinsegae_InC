package org.example.save;

public class SaveService {

    private int balance;

    public int in(int ammount){

        int result = 0;

        this.balance += ammount;

        result = this.balance;

        return result;
    }

    public int out(int ammount){

        int result = 0;
        this.balance -= ammount;
        result = this.balance;
        return result;

    }
}
