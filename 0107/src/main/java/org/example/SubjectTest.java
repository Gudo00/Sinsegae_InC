package org.example;

import java.util.Arrays;

public class SubjectTest {
    public static void main(String[] arg){
        SubjectScore s1 = new SubjectScore();
        System.out.println(s1);

        s1.subject = "국어";
        s1.score = 30;

        SubjectScore s2 = new SubjectScore();
        System.out.println(s1);

        s1.subject = "영어";
        s1.score = 40;

        SubjectScore s3 = new SubjectScore();
        System.out.println(s1);

        s1.subject = "수학";
        s1.score = 20;


    }

}
