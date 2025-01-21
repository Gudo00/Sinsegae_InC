package org.example;

import lombok.Cleanup;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;

public class Main {


    public static void main(String[] args) throws Exception {

        @Cleanup
        Ex2 ex2 = new Ex2();

        System.out.println(ex2);

//        String path = "http://mp4.cine21.com/cine21.com/movie/making/2023/12/slam_smk.mp4";
//        URL url = new URL(path);
//        InputStream in = url.openStream();
//
////        InputStream in = new FileInputStream("C:\\zzz\\aaa.png");
//        OutputStream out = new FileOutputStream("C:\\zzz\\copy.mp4");
//
//        // 모든 Stream은 사용 후 닫는다. close
//        while(true){
//
//            int data = in.read(); // 1 byte + 255  음수가 나올 수 없게
//            System.out.println(data);
//
//            if(data == -1){break;}  // 더 이상 읽어야 할 데이터가 없는 경우
//            out.write(data);
//
//        } // end while
//
//        in.close();
//        out.close();

    }
}