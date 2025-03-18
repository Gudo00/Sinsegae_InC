package org.example.mapper;

import lombok.extern.log4j.Log4j2;
import org.example.sp1.dto.BoardDTO;
import org.example.sp1.dto.PageRequestDTO;
import org.example.sp1.mapper.BoardMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.sql.SQLException;

@ExtendWith(SpringExtension.class)
@Log4j2
@ContextConfiguration("file:src/main/webapp/WEB-INF/root-context.xml")
public class BoardMapperTests {

    @Autowired(required = false)
    BoardMapper mapper;

    @Test
    public void testInsert() throws SQLException {

        BoardDTO dto = BoardDTO.builder()
                .title("sample title")
                .content("sample content")
                .writer("user00")
                .build();

        int count = mapper.insert(dto);

        log.info("---------------------------------");
        log.info("insert count: " + count);
        log.info(dto.getBno());

    }

    @Test
    public void testSelect() throws SQLException {

        BoardDTO dto = mapper.selectOne(2);

        log.info(dto);

    }

    @Test
    public void testSelectAll()  {

        try {
            java.util.List<BoardDTO> dtos = mapper.selectAll();

            dtos.forEach(boardDTO -> log.info(boardDTO));

        }catch(Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void selectPageTest() {

        PageRequestDTO page = new PageRequestDTO();
        page.setPage(-1);
        page.setSize(100);

        java.util.List<BoardDTO> dtos = mapper.selectPage(page);

        dtos.forEach(boardDTO -> log.info(boardDTO));

    }


    @Test
    public void testUpdate() throws SQLException {

        BoardDTO dto = BoardDTO.builder()
                .bno(2)
                .title("sample updated title")
                .content("sample updated content")
                .build();

        int count = mapper.update(dto);
        log.info("update count: " + count);
    }



}
