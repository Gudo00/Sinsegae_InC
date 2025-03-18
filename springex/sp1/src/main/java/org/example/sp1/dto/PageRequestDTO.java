package org.example.sp1.dto;

public class PageRequestDTO {

    private int page = 1;
    private int size = 10;


    // limit 10 offset 20 (3-1) * size
    public int getOffset() {
       return (page - 1) * size;
    }

    public int getLimit() {
        return this.size;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {

        if(page < 1) {
            page = 1;
            return;
        }
        if(page > 10000){
            page = 100;
            return;
        }

        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {

        if(size < 10) {
            this.size = 10;
            return;
        }

        if(size > 100){
            this.size = 100;
            return;
        }

        this.size = size;
    }
}









