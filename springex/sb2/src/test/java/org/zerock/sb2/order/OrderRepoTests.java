package org.zerock.sb2.order;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.sb2.order.entities.OrderDetailEntity;
import org.zerock.sb2.order.entities.OrderEntity;
import org.zerock.sb2.order.repository.OrderDetailEntityRepository;
import org.zerock.sb2.order.repository.OrderEntityRepository;
import org.zerock.sb2.product.entities.ProductEntity;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootTest
@Log4j2
public class OrderRepoTests {

    @Autowired(required = false)
    private OrderEntityRepository repo;

    @Autowired(required = false)
    private OrderDetailEntityRepository detailRepo;

    @Test
    public void testInsert(){

        ProductEntity p1 = ProductEntity.builder().pno(1L).build();
        ProductEntity p2 = ProductEntity.builder().pno(2L).build();
        ProductEntity p3 = ProductEntity.builder().pno(3L).build();

        OrderEntity order = OrderEntity.builder()
                .customer("user00")
                .build();

        OrderDetailEntity od1 = OrderDetailEntity.builder()
                .product(p1).quantity(1).build();

        OrderDetailEntity od2 = OrderDetailEntity.builder()
                .product(p2).quantity(2).build();

        OrderDetailEntity od3 = OrderDetailEntity.builder()
                .product(p3).quantity(3).build();

        order.addDetail(od1);
        order.addDetail(od2);
        order.addDetail(od3);

        repo.save(order);

    }

    @Transactional
    @Test
    public void testSelectOne(){

        OrderEntity order = repo.selectOne(1L);

        log.info(order);
        log.info(order.getDetails());

    }

    @Test
    public void testInsertDummies(){

        for (int i = 0; i < 13 ; i++) {

            ProductEntity p1 = ProductEntity.builder().pno(1L).build();
            ProductEntity p2 = ProductEntity.builder().pno(2L).build();
            ProductEntity p3 = ProductEntity.builder().pno(3L).build();

            OrderEntity order = OrderEntity.builder()
                    .customer("user01")
                    .build();

            OrderDetailEntity od1 = OrderDetailEntity.builder()
                    .product(p1).quantity(1).build();

            OrderDetailEntity od2 = OrderDetailEntity.builder()
                    .product(p2).quantity(2).build();

            OrderDetailEntity od3 = OrderDetailEntity.builder()
                    .product(p3).quantity(3).build();

            order.addDetail(od1);
            order.addDetail(od2);
            order.addDetail(od3);

            repo.save(order);


        }//end for


    }

    @Transactional
    @Test
    public void testOfCustomer(){

        String customer = "user01";

        Pageable pageable = PageRequest.of(0, 10, Sort.by("ono").descending());

        Page<OrderEntity> page = repo.listOfUser(customer, pageable);

        log.info(page);

        page.get().forEach(orderEntity -> {
            log.info(orderEntity);
            log.info(orderEntity.getDetails());

            orderEntity.getDetails().forEach(orderDetailEntity -> {
                log.info(orderDetailEntity.getProduct());
                log.info("----");
            });

            log.info("-------------------");
        });
    }

    @Transactional
    @Test
    public void testOfOrderAll(){

        String customer = "user01";
        Pageable pageable = PageRequest.of(0, 10, Sort.by("ono").descending());

        Page<OrderEntity> page = repo.listOfUserOrder(customer, pageable);
        //15,14,13,12,11,....5
        java.util.List<Long> onos = page.stream().map(orderEntity -> orderEntity.getOno()).collect(Collectors.toUnmodifiableList());

        List<OrderDetailEntity> detailList = detailRepo.listOfOnos(onos);

        log.info("======================================");
        log.info(detailList); //사용자가 주문한 주문 상세의 번호들

        detailList.forEach(detailEntity -> {

            log.info(detailEntity);
            log.info("ORDER: " +detailEntity.getOrder());
            log.info("PRODUCT: " +detailEntity.getProduct());
            log.info("PRODUCT: " +detailEntity.getProduct().getImages().get(0));

            log.info("-----------------");

        });

    }


    @Transactional
    @Test
    public void testOfOrderAll2(){

        String customer = "user01";
        Pageable pageable = PageRequest.of(0, 10, Sort.by("ono").descending());

        Page<OrderEntity> page = repo.listOfUserOrder(customer, pageable);
        //15,14,13,12,11,....5
        java.util.List<Long> onos = page.stream().map(orderEntity -> orderEntity.getOno()).collect(Collectors.toUnmodifiableList());

        List<Object[]> detailList = detailRepo.listOfOnos2(onos);

        log.info("======================================");
        log.info(detailList); //사용자가 주문한 주문 상세의 번호들

        detailList.forEach(arr -> {

            log.info(Arrays.toString(arr));

            log.info("-----------------");

        });

    }

    @Transactional
    @Commit
    @Test
    public void testDeleteDetail(){

        Long odno = 42L;

        OrderDetailEntity detailEntity = detailRepo.findById(odno).orElse(null);

        if(detailEntity != null){
            OrderEntity orderEntity = detailEntity.getOrder();
            orderEntity.removeDetail(detailEntity);
        }
    }

    @Transactional
    @Commit
    @Test
    public void testUpdateDetail(){
        Long odno = 41L;

        OrderDetailEntity detailEntity = detailRepo.findById(odno).orElse(null);

        if(detailEntity != null){

            detailEntity.changeQuantity(5);
            OrderEntity orderEntity = detailEntity.getOrder();
            orderEntity.updateDetail(detailEntity);
        }

    }

}
