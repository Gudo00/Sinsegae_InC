package org.example.ex1;

import lombok.Cleanup;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class Server1 {

    // bad code
    public static void main(String[] args) throws Exception {

        // 포트번호 5555번으로 서버 열기
        @Cleanup
        ServerSocket serverSocket = new ServerSocket(5555);
        System.out.println("Server started !");

        for(int i = 0; i <= 100; i++){

            @Cleanup
            Socket clientSocket = serverSocket.accept(); // 소켓 연결
            System.out.println(clientSocket);

            @Cleanup
            InputStream inputStream = clientSocket.getInputStream();

            Scanner inScanner = new Scanner(inputStream);

            String line = inScanner.nextLine();

            System.out.println(line);

        }




    }
}
