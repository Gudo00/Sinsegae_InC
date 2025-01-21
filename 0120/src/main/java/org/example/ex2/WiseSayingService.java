package org.example.ex2;

public enum WiseSayingService {
    INSTANCE;

    private String[] sentences;

    private WiseSayingService() {
        sentences = new String[5];
        sentences[0] = "Ever tried, Ever failed, No Matter. Try again, Fail again, Fail Better. The World is yours";
        sentences[1] = "남들이 당신을 평가하는 기준에 휘둘리지 말라. 당신만의 길을 가라.";
        sentences[2] = "노력은 배신하지 않는다.";
        sentences[3] = "작은 일들이 모여 위대한 결과를 만든다.";
        sentences[4] = "시간은 우리 편이다, 단 포기하지 않는다면.";
    }

    public String getOne(){
        int idx =(int)(Math.random()*sentences.length); // 0,1,2,3,4,
        return sentences[idx];

    }
}
