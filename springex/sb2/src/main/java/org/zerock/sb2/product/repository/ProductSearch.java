package org.zerock.sb2.product.repository;

import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.product.dto.ProductListAllDTO;
import org.zerock.sb2.product.dto.ProductListDTO;

public interface ProductSearch {

    PageResponseDTO<ProductListDTO> listQuerydsl(PageRequestDTO pageRequestDTO);

    PageResponseDTO<ProductListAllDTO> listAllQuerydsl(PageRequestDTO pageRequestDTO);

}
