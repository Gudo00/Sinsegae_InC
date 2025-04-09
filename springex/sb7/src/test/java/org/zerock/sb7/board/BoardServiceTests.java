package org.zerock.sb7.board;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.zerock.sb7.board.dto.BoardListDTO;
import org.zerock.sb7.board.dto.PageRequestDTO;
import org.zerock.sb7.board.dto.PageResponseDTO;
import org.zerock.sb7.board.service.BoardService;

@SpringBootTest
@Log4j2
public class BoardServiceTests {

    @Autowired
    private BoardService boardService;

    @Test
    public void testListBoards() {

        PageResponseDTO<BoardListDTO> result = boardService.list(new PageRequestDTO());

        result.getDtoList().forEach(board -> log.info(board));

    }

}
