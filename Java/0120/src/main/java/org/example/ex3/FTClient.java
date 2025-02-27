package org.example.ex3;

import lombok.Cleanup;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.Socket;

public class FTClient {

    //bad code
    public static void main(String[] args)throws Exception {

        @Cleanup
        Socket socket = new Socket("192.168.219.110",5555);

        @Cleanup
        InputStream in = socket.getInputStream();

        @Cleanup
        FileOutputStream fos = new FileOutputStream("Today.jpg");

        byte[] buffer = new byte[1024];

        System.out.println("전송된 데이터 읽기 시작");

        while(true){
            int count = in.read(buffer);
            System.out.println(count);
            if(count == -1) { break; }

            fos.write(buffer,0, count);

        }//end while
    }
}