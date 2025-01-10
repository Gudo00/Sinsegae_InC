package org.example;

import org.example.save.SaveService;
import org.example.save.SaveUI;
import org.example.word.WordService;
import org.example.word.WordUI;

import java.util.*;

public class Main {
    public static void main(String[] args) {

        // 필요한 객체 준비
        //프로그램 시작

//        SaveUI ui = new SaveUI();
//        ui.doJob();


        WordService wordService = new WordService();
        WordUI wordUI = new WordUI(wordService);
        wordUI.exam();

    }
}