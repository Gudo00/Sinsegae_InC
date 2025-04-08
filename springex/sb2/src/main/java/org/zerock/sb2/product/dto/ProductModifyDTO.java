package org.zerock.sb2.product.dto;

import lombok.Data;

import java.util.List;

@Data
public class ProductModifyDTO {

    private Long pno;

    private String pname;

    private int price;

    private List<String> imageNames;
}
