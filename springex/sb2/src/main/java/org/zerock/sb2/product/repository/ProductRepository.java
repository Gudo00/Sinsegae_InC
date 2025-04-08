package org.zerock.sb2.product.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.product.dto.ProductListDTO;
import org.zerock.sb2.product.dto.ProductReadDTO;
import org.zerock.sb2.product.entities.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Long>, ProductSearch {

    @EntityGraph(attributePaths = "images", type = EntityGraph.EntityGraphType.FETCH)
    @Query("select p from ProductEntity p where p.pno = :pno ")
    ProductEntity selectOne(@Param("pno") Long pno);



    //pno, pname, price, imgName
    @Query("select p.pno, p.pname, p.price, pi.imgName " +
            "from ProductEntity p left join p.images pi WHERE pi.ord = 0 ")
    Page<Object[]> list1(Pageable pageable);

//    @Query("select " +
//            " new org.zerock.sb2.product.dto.ProductListDTO ( p.pno, p.pname, p.price, pi.imgName) " +
//            "from ProductEntity p left join p.images pi WHERE pi.ord = 0 ")
//    Page<ProductListDTO> list1DTO(Pageable pageable);



}
