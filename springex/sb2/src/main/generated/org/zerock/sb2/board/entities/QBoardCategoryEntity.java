package org.zerock.sb2.board.entities;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBoardCategoryEntity is a Querydsl query type for BoardCategoryEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QBoardCategoryEntity extends EntityPathBase<BoardCategoryEntity> {

    private static final long serialVersionUID = -11724191L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBoardCategoryEntity boardCategoryEntity = new QBoardCategoryEntity("boardCategoryEntity");

    public final NumberPath<Long> bcno = createNumber("bcno", Long.class);

    public final QBoardEntity board;

    public final org.zerock.sb2.category.entities.QCategoryEntity category;

    public QBoardCategoryEntity(String variable) {
        this(BoardCategoryEntity.class, forVariable(variable), INITS);
    }

    public QBoardCategoryEntity(Path<? extends BoardCategoryEntity> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBoardCategoryEntity(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBoardCategoryEntity(PathMetadata metadata, PathInits inits) {
        this(BoardCategoryEntity.class, metadata, inits);
    }

    public QBoardCategoryEntity(Class<? extends BoardCategoryEntity> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.board = inits.isInitialized("board") ? new QBoardEntity(forProperty("board")) : null;
        this.category = inits.isInitialized("category") ? new org.zerock.sb2.category.entities.QCategoryEntity(forProperty("category")) : null;
    }

}

