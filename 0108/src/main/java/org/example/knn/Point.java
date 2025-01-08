package org.example.knn;

public class Point {

    String type; // J/Z
    int xpos;
    int ypos;

    public Point(String type, int xpos, int ypos) {
        this.type = type;
        this.xpos = xpos;
        this.ypos = ypos;
    }

    public Point(int xpos, int ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }


}