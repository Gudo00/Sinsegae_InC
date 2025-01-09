package org.example.personality_test;
import lombok.*;

@Setter
@Getter
@ToString

public class Question {
    private int num;
    private String text;
    private int yesIndex;
    private int noIndex;

    public Question(int num){
    this.num = num;
    }

}
