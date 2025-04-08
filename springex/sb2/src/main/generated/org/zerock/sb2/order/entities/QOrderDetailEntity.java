package org.zerock.sb2.order.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOrderDetailEntity is a Querydsl query type for OrderDetailEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOrderDetailEntity extends EntityPathBase<OrderDetailEntity> {

    private static final long serialVersionUID = 350979700L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QOrderDetailEntity orderDetailEntity = new QOrderDetailEntity("orderDetailEntity");

    public final NumberPath<Long> odno = createNumber("odno", Long.class);

    public final QOrderEntity order;

    public final org.zerock.sb2.product.entities.QProductEntity product;

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    public QOrderDetailEntity(String variable) {
        this(OrderDetailEntity.class, forVariable(variable), INITS);
    }

    public QOrderDetailEntity(Path<? extends OrderDetailEntity> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QOrderDetailEntity(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QOrderDetailEntity(PathMetadata metadata, PathInits inits) {
        this(OrderDetailEntity.class, metadata, inits);
    }

    public QOrderDetailEntity(Class<? extends OrderDetailEntity> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.order = inits.isInitialized("order") ? new QOrderEntity(forProperty("order")) : null;
        this.product = inits.isInitialized("product") ? new org.zerock.sb2.product.entities.QProductEntity(forProperty("product")) : null;
    }

}

