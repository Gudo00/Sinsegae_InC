package org.example.ex1;

import java.io.IOException;
import java.net.ServerSocket;

public class StrServer {

    public void runServer() throws ServerPortException{
        try{

            ServerSocket serverSocket = new ServerSocket(5555);

        }catch(Exception e){

            throw new ServerPortException("5555번 Port에 문제 있음.");
        }

    }

}
