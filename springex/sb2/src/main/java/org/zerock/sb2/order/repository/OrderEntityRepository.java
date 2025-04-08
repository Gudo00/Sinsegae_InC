package org.zerock.sb2.order.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.zerock.sb2.order.entities.OrderDetailEntity;
import org.zerock.sb2.order.entities.OrderEntity;

import java.util.List;

public interface OrderEntityRepository extends JpaRepository<OrderEntity, Long> {

    @EntityGraph(attributePaths = {"details", "details.product"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT oe FROM OrderEntity oe WHERE oe.ono = :ono")
    OrderEntity selectOne( @Param("ono") Long ono);

    //결과는 정상적으로 나오지만 페이징 처리가 없으므로 위험하다
    @EntityGraph(attributePaths = {"details.product"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT oe FROM OrderEntity oe WHERE oe.customer = :customer")
    Page<OrderEntity> listOfUser(@Param("customer")String customer, Pageable pageable);

    @Query("SELECT oe FROM OrderEntity oe WHERE oe.customer = :customer ")
    Page<OrderEntity> listOfUserOrder(@Param("customer")String customer, Pageable pageable);


}
