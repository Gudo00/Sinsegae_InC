package org.zerock.sb2.order.entities;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.BatchSize;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tbl_order")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "details")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ono;

    private String customer;

    @OneToMany(mappedBy = "order",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    @BatchSize(size = 10)
    @Builder.Default
    private List<OrderDetailEntity> details = new ArrayList<>();

    public void addDetail(OrderDetailEntity detail) {

        //양방향이니까 OrderDetailEntity역시 OrderEntity를 참조해야만 함
        detail.setOrderEntity(this);

        details.add(detail);

    }

    public void removeDetail(OrderDetailEntity detail) {

        details.remove(detail);
        detail.setOrderEntity(null);

    }

    public void updateDetail(OrderDetailEntity detail) {

        details.remove(detail);
        detail.setOrderEntity(this);
        details.add(detail);

    }
}











