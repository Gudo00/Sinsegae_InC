package org.example;

import lombok.Cleanup;

import java.io.*;

public class FileCopy3 {

    //bad code
    public static void main(String[] args) throws Exception {

        File sourceFile = new File("C:\\zzz\\test.txt");
        System.out.println("Source file exists: " + sourceFile.exists());
        System.out.println("Source file size: " + sourceFile.length() + " bytes");

        File destFile = new File("copy.txt");
        System.out.println("Destination file (before copy) exists: " + destFile.exists());
        System.out.println("Destination file size: " + destFile.length() + " bytes");

        @Cleanup
        InputStream fin = new FileInputStream("C:\\zzz\\test.txt");

        byte[] buffer = new byte[5];

        @Cleanup
        OutputStream fos = new FileOutputStream("C:\\zzz\\copy.txt");

        while(true){

            int count = fin.read(buffer); //계란판을 이용한 읽기

            if(count == -1){
                break;
            }

            fos.write(buffer, 0, count); // 맨처음부터, 새롭게 채워진 숫자만큼만

        }//end while

    }

}
