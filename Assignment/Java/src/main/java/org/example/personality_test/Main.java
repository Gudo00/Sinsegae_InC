package org.example.personality_test;
import lombok.*;
import java.util.*;

@Setter
public class Main {
    public static void main(String[] args) {
        ArrayList<Question> questions = new ArrayList<>();

        for(int i = 0; i <= 15; i++){
            Question question = new Question(i);
            questions.add(question);
        }

        // Question Texts
        questions.get(0).setText("일을 하기는 하는데 뭘 하고 있는지 잘 모르겠다. ");
        questions.get(0).setYesIndex(1);
        questions.get(0).setNoIndex(3);

        questions.get(1).setText("일과 관련한 기록을 어떤 방식으로든 하고 있다. ");
        questions.get(1).setYesIndex(2);
        questions.get(1).setNoIndex(5);

        questions.get(2).setText("주변에 일 고민을 나눌 수 있는 사수나 동료가 없다. ");
        questions.get(2).setYesIndex(4);
        questions.get(2).setNoIndex(8);

        questions.get(3).setText("지나온 커리어가 나에게 어떤 의미인지 잘 알고 있다. ");
        questions.get(3).setYesIndex(6);
        questions.get(3).setNoIndex(4);

        questions.get(4).setText("지금 나아게 가장 필요한건 일에 대한 피드백이다. ");
        questions.get(4).setYesIndex(8);
        questions.get(4).setNoIndex(7);

        questions.get(5).setText("일에서 실수가 잦은게 고민이다. ");
        questions.get(5).setYesIndex(8);
        questions.get(5).setNoIndex(7);

        questions.get(6).setText("나의 커리어패스나 경험을 눈에 보이는 방식으로 한번 정리하고 싶다. ");
        questions.get(6).setYesIndex(9);
        questions.get(6).setNoIndex(7);

        questions.get(7).setText("사이드 프로젝트에 대한 생각이 없다. ");
        questions.get(7).setYesIndex(15);
        questions.get(7).setNoIndex(10);

        questions.get(8).setText("분명히 했던 일인데 또 하려면 어떻게 했는지 기억이 잘 나지 않는다. ");
        questions.get(8).setYesIndex(11);
        questions.get(8).setNoIndex(9);

        questions.get(9).setText("내 감정을 잘 설명하고 싶다. ");
        questions.get(9).setYesIndex(12);
        questions.get(9).setNoIndex(10);

        questions.get(10).setText("긴 글을 쓰고 싶다는 마음이 늘 있다. ");
        questions.get(10).setYesIndex(13);
        questions.get(10).setNoIndex(11);

        questions.get(11).setText("내가 팀에서 뭘 원하는지, 뭘 하고 싶지 않은지 알고 싶다. ");
        questions.get(11).setYesIndex(14);
        questions.get(11).setNoIndex(15);

        questions.get(12).setText(" A ");
        questions.get(13).setText(" B ");
        questions.get(14).setText(" C ");
        questions.get(15).setText(" D ");

        int Index = 0;
        Scanner scanner = new Scanner(System.in);

        System.out.println("일하는 나는 지금 어떤 상태일까? 🤔");

        // 로직
        // 질문이 나오면 0, 1 입력 (loop)
        // 정보에 맞는 Text 출력
        // 이후 연결되는 다음 Text 출력

        for(int i = 0; i < questions.size(); i++){
            Question question = questions.get(Index);
            System.out.println(question.getText());
            System.out.println("Yes : 0, No : 1");
            int value = scanner.nextInt();
            Index += value;


        }

    }
}