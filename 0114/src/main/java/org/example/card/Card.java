package org.example.card;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@ToString
public class Card {

    private CardPattern pattern;
    private int num;



}