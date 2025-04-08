package org.zerock.sb2.product.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.product.dto.ProductAddDTO;
import org.zerock.sb2.product.dto.ProductListAllDTO;
import org.zerock.sb2.product.dto.ProductModifyDTO;
import org.zerock.sb2.product.dto.ProductReadDTO;
import org.zerock.sb2.product.entities.ProductEntity;
import org.zerock.sb2.product.repository.ProductRepository;

@Transactional
@Service
@Log4j2
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository repository;

    @Override
    public Long add(ProductAddDTO dto) {

        ProductEntity productEntity = addDTOToEntity(dto);

        repository.save(productEntity);

        return productEntity.getPno();
    }

    @Override
    public ProductReadDTO read(Long pno) {

        return new ProductReadDTO(repository.selectOne(pno));
    }

    @Override
    public void modify(ProductModifyDTO dto) {

        //상품 엔티티 조회한 후에
        ProductEntity productEntity = repository.selectOne(dto.getPno());

        //변경 내용을 반영하고
        productEntity.changePname(dto.getPname());
        productEntity.changePrice(dto.getPrice());

        //이미지 조정하고
        productEntity.clearImages();
        dto.getImageNames().forEach(imgName -> productEntity.addImage(imgName));

        //변경감지 혹은 save

    }

    @Transactional(readOnly = true)
    @Override
    public PageResponseDTO<ProductListAllDTO> listProducts(PageRequestDTO pageRequestDTO) {

        return repository.listAllQuerydsl(pageRequestDTO);

    }
}
