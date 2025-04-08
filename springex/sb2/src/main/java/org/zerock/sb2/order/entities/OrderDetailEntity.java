package org.zerock.sb2.order.entities;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.BatchSize;
import org.zerock.sb2.product.entities.ProductEntity;

@Entity
@Table(name = "tbl_order_detail")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"product", "order"})
public class OrderDetailEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long odno;

    @ManyToOne(fetch = FetchType.LAZY)
    private ProductEntity product;

    @ManyToOne(fetch = FetchType.LAZY)
    private OrderEntity order;

    private int quantity;

    public void setOrderEntity(OrderEntity order) {
        this.order = order;
    }

    public void changeQuantity(int quantity) {
        this.quantity = quantity;
    }

}
