package org.zerock.sb2.product.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductListDTO {

    private Long pno;
    private String pname;
    private int price;
    private String imgName;

    private double avgRating;
    private long reviewCnt;

    public ProductListDTO(Long pno, String pname, int price, String imgName, double avgRating, long reviewCnt) {
        this.pno = pno;
        this.pname = pname;
        this.price = price;
        this.imgName = imgName;
        this.avgRating = avgRating;
        this.reviewCnt = reviewCnt;
    }

}
