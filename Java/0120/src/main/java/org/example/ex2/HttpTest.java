package org.example.ex2;

import lombok.Cleanup;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class HttpTest {

    // bad code
    public static void main(String[] args) throws Exception {

        ServerSocket serverSocket = new ServerSocket(5555);
        System.out.println("Server started !!");

        for(int i = 0; i < 10; i++){
            byte[] arr = new byte[100 * 8]; // 800 byte

            @Cleanup
            Socket client = serverSocket.accept();

            @Cleanup
            InputStream in = client.getInputStream();

            @Cleanup
            OutputStream out = client.getOutputStream();


            int count = in.read(arr); // 몇 개나 새로운 데이터가 채워졌는지 ?

            String str = new String(arr, 0, count);

            System.out.println(str);
            System.out.println("---------------------");

            // HTTP 응답 작성
            String response = """
                HTTP/1.1 200 OK
                Content-Type: text/html; charset=UTF-8
                
                """; // 브라우저에 Hello World 찍기
            response += "<h1>" + WiseSayingService.INSTANCE.getOne() + "</h1>";

            byte[] msgArr = response.getBytes();
            out.write(msgArr);
        } // end for

    }
}
