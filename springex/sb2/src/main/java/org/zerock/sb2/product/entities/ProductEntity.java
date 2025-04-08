package org.zerock.sb2.product.entities;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.BatchSize;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tbl_product")
@EntityListeners(value = AuditingEntityListener.class)
@Getter
@ToString(exclude = "images")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pno;

    private String pname;

    private int price;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(
            name = "tbl_product_img",
            joinColumns = @JoinColumn(name="product_pno"))
    @BatchSize(size = 20)
    @Builder.Default
    private List<ProductImage> images = new ArrayList<>();

    public void addImage(String fileName) {
        ProductImage image = new ProductImage();
        image.setImgName(fileName);
        image.setOrd(images.size());

        images.add(image);
    }

    public void clearImages() {
        images.clear();
    }

    public void changePname(String pname) {
        this.pname = pname;
    }

    public void changePrice(int price) {
        this.price = price;
    }


}
