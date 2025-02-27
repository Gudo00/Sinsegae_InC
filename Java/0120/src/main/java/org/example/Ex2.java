package org.example;

public class Ex2 implements AutoCloseable{
    @Override
    public void close() throws Exception {
        System.out.println("close.........");
    }
}