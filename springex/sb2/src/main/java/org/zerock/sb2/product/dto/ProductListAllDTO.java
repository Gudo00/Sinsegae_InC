package org.zerock.sb2.product.dto;

import lombok.Data;

import java.util.List;

@Data
public class ProductListAllDTO {

    private Long pno;
    private String pname;
    private int price;
    private List<String> imgNames;

    private double avgRating;
    private long reviewCnt;
}
