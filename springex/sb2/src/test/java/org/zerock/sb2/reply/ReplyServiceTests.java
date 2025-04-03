package org.zerock.sb2.reply;


import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.sb2.board.dto.PageRequestDTO;
import org.zerock.sb2.reply.dto.ReplyAddDTO;
import org.zerock.sb2.reply.service.ReplyService;

@SpringBootTest
@Log4j2
public class ReplyServiceTests {

    @Autowired
    private ReplyService service;

    @Test
    public void testAdd() {
        Long bno = 122L;

        for (int i = 0; i < 3; i++) {

            ReplyAddDTO addDTO = ReplyAddDTO.builder()
                    .replyText("Test..reply.. ")
                    .replyer("user00")
                    .bno(bno)
                    .build();

            log.info(service.add(addDTO));

        }//end for
    }

    @Test
    public void testRead() {
        log.info(service.get(270L));
    }

    @Test
    public void testListOfBoard() {

        PageRequestDTO requestDTO = new PageRequestDTO();
        Long bno = 8123L;

        log.info(service.getListOfBoard(bno, requestDTO));

    }

}











