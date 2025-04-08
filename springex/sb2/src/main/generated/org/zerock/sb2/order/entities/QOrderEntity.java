package org.zerock.sb2.order.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOrderEntity is a Querydsl query type for OrderEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOrderEntity extends EntityPathBase<OrderEntity> {

    private static final long serialVersionUID = 1270770371L;

    public static final QOrderEntity orderEntity = new QOrderEntity("orderEntity");

    public final StringPath customer = createString("customer");

    public final ListPath<OrderDetailEntity, QOrderDetailEntity> details = this.<OrderDetailEntity, QOrderDetailEntity>createList("details", OrderDetailEntity.class, QOrderDetailEntity.class, PathInits.DIRECT2);

    public final NumberPath<Long> ono = createNumber("ono", Long.class);

    public QOrderEntity(String variable) {
        super(OrderEntity.class, forVariable(variable));
    }

    public QOrderEntity(Path<? extends OrderEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QOrderEntity(PathMetadata metadata) {
        super(OrderEntity.class, metadata);
    }

}

