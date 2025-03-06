package org.example.lotto;

import java.io.*;
import java.net.*;
import java.util.*;

public class LottoServer {
    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(5555);
        System.out.println("Lotto Ball Run.........");

        while (true) {

            Socket socket = serverSocket.accept();
            OutputStream outputStream = socket.getOutputStream();

            Set<Integer> ballSet = new HashSet<>(); // 중복 제거

            while (ballSet.size() < 6) {
                int rdm = (int)(Math.random()*45) + 1; // 1 ~ 45
                ballSet.add(rdm);
            }

            ArrayList<Integer> ball = new ArrayList<>(ballSet);
            Collections.sort(ball);

            String res = "🤗 Lotto 번호 : " + ball.toString() + "\n";

            outputStream.write("HTTP/1.1 200 OK\r\n".getBytes());
            outputStream.write("Content-Type: text/plain; charset=UTF-8\r\n".getBytes());
            outputStream.write(("Content-Length: " + res.length() + "\r\n").getBytes());
            outputStream.write("\r\n".getBytes());
            outputStream.write(res.getBytes());

        }
    }
}
