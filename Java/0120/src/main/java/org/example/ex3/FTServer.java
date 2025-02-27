package org.example.ex3;

import lombok.Cleanup;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class FTServer {

    //bad code
    public static void main(String[] args) throws Exception {

        ServerSocket serverSocket = new ServerSocket(5555);
        System.out.println("FTServer Ready....");

        int num = (int)(Math.random() * 4) + 1; // 1 -- 4

        String fileName = "C:\\zzz\\"+num+".jpg";

        byte[] buffer = new byte[1024*8];

        while(true){

            System.out.println("---------------------------");
            @Cleanup
            Socket socket = serverSocket.accept();
            @Cleanup
            OutputStream outputStream = socket.getOutputStream();
            @Cleanup
            InputStream fin = new FileInputStream(fileName);

            while(true){

                int count = fin.read(buffer);

                if(count == -1) { break; }

                outputStream.write(buffer,0,count);

            }//end while

            System.out.println("===========================");


        }//end while
    }

}