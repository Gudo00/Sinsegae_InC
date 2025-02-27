package org.example.word;

import java.util.ArrayList;

public class WordService {

    private ArrayList<WordVO> wordList;

    public WordService(){
        wordList = new ArrayList<>();
        wordList.add(new WordVO("사과","apple"));
        wordList.add(new WordVO("바나나","banana"));
        wordList.add(new WordVO("강아지/개","dog"));

    }

    //다음 단어를 뽑아주는 기능
    public WordVO getNextWord() {

        WordVO word = null;

        word = wordList.remove(0);

        return word;
    }

}