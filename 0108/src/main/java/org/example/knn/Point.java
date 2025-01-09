package org.example.knn;

public class Point {

    public String type; // J/Z
    public int xpos;
    public int ypos;

    public Point(String type, int xpos, int ypos) {

        System.out.println("AAAA");

        this.type = type;
        this.xpos = xpos;
        this.ypos = ypos;
    }

    public Point(int xpos, int ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }


}