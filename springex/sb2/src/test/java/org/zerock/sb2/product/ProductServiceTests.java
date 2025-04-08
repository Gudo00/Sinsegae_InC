package org.zerock.sb2.product;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.zerock.sb2.product.dto.ProductAddDTO;
import org.zerock.sb2.product.dto.ProductModifyDTO;
import org.zerock.sb2.product.dto.ProductReadDTO;
import org.zerock.sb2.product.service.ProductService;

import java.util.List;

@SpringBootTest
@Log4j2
public class ProductServiceTests {

    @Autowired
    private ProductService service;

    @Test
    public void testAddProduct() {

        ProductAddDTO dto = new ProductAddDTO();
        dto.setPname("Sample Product");
        dto.setPrice(8000);
        dto.setImageNames(List.of("aaa.jpg","bbb.jpg","ccc.jpg"));

        Long pno = service.add(dto);

        log.info(pno);
    }


    @Test
    public void testReadProduct() {

        ProductReadDTO dto = service.read(33L);
        log.info(dto);
    }

    @Test
    @Commit
    public void testModifyProduct() {

        ProductModifyDTO dto = new ProductModifyDTO();
        dto.setPno(1L);
        dto.setPname("Sample No1 Product");
        dto.setPrice(8000);
        dto.setImageNames(List.of("1aaa.jpg","1bbb.jpg","1ccc.jpg"));

        service.modify(dto);

    }

}
