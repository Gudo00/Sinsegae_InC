package org.zerock.sb2.product.service;


import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.product.dto.ProductAddDTO;
import org.zerock.sb2.product.dto.ProductListAllDTO;
import org.zerock.sb2.product.dto.ProductModifyDTO;
import org.zerock.sb2.product.dto.ProductReadDTO;
import org.zerock.sb2.product.entities.ProductEntity;

public interface ProductService {

    Long add(ProductAddDTO dto);

    ProductReadDTO read(Long pno);

    void modify(ProductModifyDTO dto);

    PageResponseDTO<ProductListAllDTO> listProducts(PageRequestDTO pageRequestDTO);

    default ProductEntity addDTOToEntity(ProductAddDTO dto) {
        ProductEntity entity = ProductEntity.builder()
                .pname(dto.getPname())
                .price(dto.getPrice())
                .build();

        dto.getImageNames().forEach(imgName -> entity.addImage(imgName));

        return entity;
    }
}
