package org.example.lots;

import java.util.ArrayList;
import java.util.Collections;

public enum LotsBox {

    INSTANCE;

    private ArrayList<String> notes;

    private LotsBox(){
        notes = new ArrayList<>();
        notes.add("꽝");
        notes.add("꽝");
        notes.add("꽝");
        notes.add("꽝");
        notes.add("당첨");

        Collections.shuffle(notes);

    }

    public String getNext(){

        String result = notes.remove(0);

        return result;
    }

}
