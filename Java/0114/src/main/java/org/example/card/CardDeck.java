package org.example.card;

import java.util.ArrayList;
import java.util.Collections;

public enum CardDeck {

    INSTANCE;

    private ArrayList<Card> cards;

    private CardDeck(){
        this.cards = new ArrayList<>();

        for(CardPattern pattern: CardPattern.values()) {

            for (int i = 1; i <= 12; i++) {

                cards.add(new Card(pattern, i));
            }
        }
        Collections.shuffle(cards);
    }

    //임의의 카드 뽑기
    public Card getOne(){
        Card card = cards.remove(0);
        return card;
    }

}
