package org.example;

import lombok.Cleanup;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

public class KeyCopy {
    public static void main(String[] args) throws Exception {
        InputStream in = System.in;

        @Cleanup
        OutputStream fos = new FileOutputStream("c:\\zzz\\input.txt");

        System.out.println("한글 입력");
        for (int i = 0; i < 10; i++) {
            int data = in.read(); // 1 byte의 내용물

            System.out.println(data);

            fos.write(data);
        }
    }
}
