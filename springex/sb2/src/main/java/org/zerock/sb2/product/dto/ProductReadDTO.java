package org.zerock.sb2.product.dto;

import lombok.Data;
import org.zerock.sb2.product.entities.ProductEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ProductReadDTO {

    private Long pno;

    private String pname;

    private int price;

    private List<String> imageNames;

    public ProductReadDTO(ProductEntity entity) {
        this.pno = entity.getPno();
        this.pname = entity.getPname();
        this.price = entity.getPrice();
        this.imageNames = entity.getImages().stream().map(pi -> pi.getImgName()).collect(Collectors.toList());
    }

}
