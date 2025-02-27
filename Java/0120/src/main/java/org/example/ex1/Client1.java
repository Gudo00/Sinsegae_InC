package org.example.ex1;

import lombok.Cleanup;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class Client1 {

    // bad code
    public static void main(String[] args) throws Exception {

        @Cleanup
        Socket socket = new Socket("127.0.0.1", 5555);
        System.out.println(socket);

        @Cleanup
        InputStream inputStream = socket.getInputStream();

        @Cleanup
        OutputStream outputStream = socket.getOutputStream();

        
        String msg = "내 인생을 망치러 온 나의 구원자, 데미안 \n";
        byte[] arr = msg.getBytes();
        outputStream.write(arr);


    }
}
