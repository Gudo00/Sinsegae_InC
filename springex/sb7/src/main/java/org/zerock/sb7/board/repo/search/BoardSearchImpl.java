package org.zerock.sb7.board.repo.search;

import com.querydsl.core.Tuple;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.JPQLQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.zerock.sb7.board.domain.*;
import org.zerock.sb7.board.dto.BoardListDTO;
import org.zerock.sb7.board.dto.PageRequestDTO;
import org.zerock.sb7.board.dto.PageResponseDTO;
import org.zerock.sb7.board.repo.BoardRepo;

import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@RequiredArgsConstructor
public class BoardSearchImpl implements BoardSearch {

    private final JPQLQueryFactory queryFactory;

    @Override
    public PageResponseDTO<BoardListDTO> search(PageRequestDTO pageRequestDTO) {

        log.info("---------------------------");
        log.info("Searching for boards");

        //1st query - paging 쿼리 - 검색 조건으로 동적으로 만들어지는 쿼리
        //나중에 실제 검색조건으로 페이징 처리를 해야 함
        int limit = pageRequestDTO.getLimit();
        int offset = pageRequestDTO.getOffset();

        QBoard board = QBoard.board;
        QFavorite favorite = QFavorite.favorite;
        QBoardImage boardImage = QBoardImage.boardImage;
        QReply reply = QReply.reply;

        JPQLQuery<Board> query = queryFactory.selectFrom(board);
        query.leftJoin(board.images, boardImage); //element collection
        query.leftJoin(favorite).on(favorite.board.eq(board));
        query.leftJoin(reply).on(reply.board.eq(board));
        //검색 조건 나중에 추가

        //query.where(favorite.choice.eq(Choice.LIKE)); // 비추만 달린 글이 안 나오는 문제
        query.where(boardImage.ord.eq(0));
        query.groupBy(board);

        query.limit(limit);
        query.offset(offset);
        query.orderBy(new OrderSpecifier<>(Order.DESC, board.bno));

        //count( ) 함수는 long 타입

        JPQLQuery<BoardListDTO> dtoQuery = query.select(
                Projections.bean(BoardListDTO.class,
                board.bno,
                board.title,
                board.writer,
                boardImage.fileName,
                favorite.choice.eq(Choice.LIKE).countDistinct().as("favoriteCount"),
                reply.countDistinct().as("replyCount")
                )
        );

        List<BoardListDTO> dtoList = dtoQuery.fetch();

        int total = (int)dtoQuery.fetchCount();


//
//        log.info("----------------------------");
//
//        List<Tuple> results = listTuqleQuery.fetch();
//
//        List<Integer> bnos =
//                results.stream().map(tuple -> tuple.get(0, Integer.class)).collect(Collectors.toUnmodifiableList());
//
//        log.info("Found {} boards", bnos);

        return PageResponseDTO.<BoardListDTO>withAll()
                .dtoList(dtoList)
                .total(total)
                .pageRequestDTO(pageRequestDTO)
                .build();

    }
}
