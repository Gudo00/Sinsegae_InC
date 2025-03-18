package org.example.sp1.mapper;

//반환타입 - insert,update,delete는 int로 반환 (몇 개, count)

import org.apache.ibatis.annotations.Param;
import org.example.sp1.dto.BoardDTO;
import org.example.sp1.dto.PageRequestDTO;

public interface BoardMapper {

    int insert(BoardDTO board);

    BoardDTO selectOne(Integer bno);

    java.util.List<BoardDTO> selectAll();

//    java.util.List<BoardDTO> selectPage(
//            @Param("limit") int limit,
//            @Param("offset") int offset);

    java.util.List<BoardDTO> selectPage(PageRequestDTO page);

    int selectCount();

    int update(BoardDTO board);

    int delete(Integer bno);

}
