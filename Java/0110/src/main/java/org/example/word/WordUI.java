package org.example.word;

//로직 위주의 객체 - 인스턴스 변수
//여러 메서드에서 사용
//메소드의 결과를 계속 보관하는 경우
//협력자(조력자) 인스턴스 변수
//한번 만들어서 여러 번 사용하는 객체


import java.util.Scanner;

public class WordUI {

    private WordService service;

    public WordUI(WordService serviceObj){
        this.service = serviceObj;
    }

    public void exam(){

        Scanner scanner = new Scanner(System.in);

        WordVO word = this.service.getNextWord();

        System.out.println(word.getKor());

        String answer = scanner.nextLine();

        if(answer.equals(word.getEng())){
            System.out.println("Correct!!!");
        }else {
            System.out.println("Wrong!");
        }

    }

}