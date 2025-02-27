package org.example.ex4;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class HttpFTServer {

    // bad code
    public static void main(String[] args) throws Exception {

        ServerSocket serverSocket = new ServerSocket(5555);
        System.out.println("FTServer Run........!");

        while(true){
            // 1. 브라우저와 연결해서 Socket을 연결해야 한다.
            Socket socket = serverSocket.accept();

            // 2. 파일을 보내고 싶으니, OutputStream을 생성.
            OutputStream outputStream = socket.getOutputStream();

            // 3. 읽고싶은 파일에 빨대 (InputStream)을 준비.
//            InputStream inputStream = new FileInputStream("C:\\zzz\\1.jpg");
            InputStream inputStream = new FileInputStream("C:\\zzz\\RING.mp4");

            // 4. Http에 맞는 img/jpg or png 헤더 메시지를 OutputStream에 기록
            outputStream.write("HTTP/1.1 200 OK\r\n".getBytes());
//            outputStream.write("Content-Type: image/jpg;\r\n".getBytes());
            outputStream.write("Content-Type: video/mp4;\r\n".getBytes());

//            outputStream.write("Content-Length: 10651\r\n".getBytes());
            outputStream.write("Content-Length: 23710005\r\n".getBytes());

            outputStream.write("\r\n".getBytes()); // 공백 넣기

            // 5. 파일 데이터를 읽어서 OutputStream에 write( )한다.  ** byte[]를 이용하면 1000배 빨라짐 **
            byte[] buffer = new byte[1024*8]; // 8KB 최적화된 크기
            while(true){
                try {
                    int count = inputStream.read(buffer);//내용물은 buffer에 있고,

                    System.out.println(count);

                    if (count == -1) {
                        break;
                    }
                    outputStream.write(buffer, 0, count);
                }catch(Exception e){
                    System.out.println("Exception");
                }
            }//end while
            outputStream.close();

        } // end while

    }
}
