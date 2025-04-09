package org.zerock.sb7.board.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.zerock.sb7.board.domain.Board;
import org.zerock.sb7.board.repo.search.BoardSearch;

public interface BoardRepo extends JpaRepository<Board, Integer>, BoardSearch {

    @Query("select b.bno, b.title, b.writer , bi.fileName, count(f) " +
            " from Board b " +
            " left join b.images bi "+
            " left join Favorite f on f.board = b " +
            " where bi.ord = 0 " +
            " and f.choice = org.zerock.sb7.board.domain.Choice.LIKE "+
            " group by b")
    Page<Object[]> listOfPage(Pageable pageable);

    //Pageable이 파라미터면 무조건 리턴타입은 Page 타입

    @Query("""
        select b.bno, b.title, b.writer, count(distinct (r)), count(distinct(f)) 
        from Board b 
            left join Reply r on r.board = b
            left join Favorite f on f.board = b    
        group by b      
    """)
    Page<Object[]> list1(Pageable pageable);
}
