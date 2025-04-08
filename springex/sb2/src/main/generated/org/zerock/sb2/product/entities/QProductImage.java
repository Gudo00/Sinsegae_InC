package org.zerock.sb2.product.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QProductImage is a Querydsl query type for ProductImage
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QProductImage extends BeanPath<ProductImage> {

    private static final long serialVersionUID = 1304337563L;

    public static final QProductImage productImage = new QProductImage("productImage");

    public final StringPath imgName = createString("imgName");

    public final NumberPath<Integer> ord = createNumber("ord", Integer.class);

    public QProductImage(String variable) {
        super(ProductImage.class, forVariable(variable));
    }

    public QProductImage(Path<? extends ProductImage> path) {
        super(path.getType(), path.getMetadata());
    }

    public QProductImage(PathMetadata metadata) {
        super(ProductImage.class, metadata);
    }

}

