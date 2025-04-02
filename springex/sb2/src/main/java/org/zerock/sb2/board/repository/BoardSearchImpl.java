package org.zerock.sb2.board.repository;

import org.zerock.sb2.board.dto.BoardListDTO;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.board.dto.PageResponseDTO;
import org.zerock.sb2.board.entities.BoardEntity;
import org.zerock.sb2.board.entities.QBoardEntity;
import org.zerock.sb2.reply.entities.QReplyEntity;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.JPQLQueryFactory;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RequiredArgsConstructor
public class BoardSearchImpl implements BoardSearch {

  private final JPQLQueryFactory queryFactory;

  @Override
  public PageResponseDTO<BoardListDTO> list(PageRequestDTO pageRequestDTO) {
    
    QBoardEntity board = QBoardEntity.boardEntity;
    QReplyEntity reply = QReplyEntity.replyEntity;

    JPQLQuery<BoardEntity> query = queryFactory.selectFrom(board);
    query.leftJoin(reply).on(reply.board.eq(board));
    

    query.where(board.bno.gt(0L));
    query.where(board.delFlag.eq(false));

    //검색 조건
    BooleanBuilder builder = new BooleanBuilder();

    String[] types = pageRequestDTO.getArr(); // ['T','C','W']

    if(types != null && types.length > 0 ){

      String keyword = pageRequestDTO.getKeyword();

      for (String type : types) {
        if(type.equals("T")){
          builder.or(board.title.contains(keyword));
        }else if(type.equals("C")){
          builder.or(board.content.contains(keyword));
        }else if(type.equals("W")){
          builder.or(board.writer.contains(keyword));
        }
      }//end for
      query.where(builder);

    }//end if

    query.groupBy(board);


    query.limit(pageRequestDTO.getLimit());
    query.offset(pageRequestDTO.getOffset());
    query.orderBy(new OrderSpecifier<>(Order.DESC, board.bno));

    JPQLQuery<BoardListDTO> dtoQuery = query.select(
      Projections.bean(
      BoardListDTO.class, 
           board.bno, 
           board.title,
           board.writer, 
           board.regDate, 
           board.viewCnt,
           reply.rno.count().as("replyCnt")
            ));

    long count = dtoQuery.fetchCount();
    
    java.util.List<BoardListDTO> dtoList = dtoQuery.fetch();

    return PageResponseDTO.<BoardListDTO>withAll()
    .dtoList(dtoList)
    .total((int)count)
    .pageRequestDTO(pageRequestDTO)
    .build();
  }
  
}
