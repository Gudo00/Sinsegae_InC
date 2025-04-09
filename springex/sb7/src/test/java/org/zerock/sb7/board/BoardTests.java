package org.zerock.sb7.board;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.sb7.board.domain.Board;
import org.zerock.sb7.board.domain.Reply;
import org.zerock.sb7.board.dto.PageRequestDTO;
import org.zerock.sb7.board.repo.BoardRepo;
import org.zerock.sb7.board.repo.FavoriteRepo;
import org.zerock.sb7.board.repo.ReplyRepo;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootTest
@Log4j2
public class BoardTests {

    @Autowired
    private BoardRepo boardRepo;
    @Autowired
    private ReplyRepo replyRepo;
    @Autowired
    private FavoriteRepo favoriteRepo;

    @Test
    public void testListGrouping() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("bno").descending());

        Page<Object[]> result = boardRepo.list1(pageable);

        result.forEach(arr -> log.info(Arrays.toString(arr)));

    }

    @Transactional
    @Test
    public void testListGrouping2() {

        //step1 페이징 되는 게시글들만 얻어온다.
        Pageable pageable = PageRequest.of(0, 10, Sort.by("bno").descending());

        //1페이지에 해당하는 Board 들만 추출
        Page<Board> boardResult = boardRepo.findAll(pageable);

        //게시물 10개만 추출
        List<Board> boardList = boardResult.getContent();
        //bno만 추출
        List<Integer> bnos = boardList.stream().map(Board::getBno).collect(Collectors.toList());

        //List<Integer> bnos = Arrays.asList(1, 2, 3,4,5,6,7,8,9,10);

        List<Object[]> replies = replyRepo.listOfBnos(bnos);

        //log.info("BoardList", boardList);
        log.info("Replies");

        replies.forEach(arr -> {
            log.info("------------------");
            log.info(Arrays.toString(arr));
        });
    }

    @Transactional
    @Test
    public void testListGrouping3() {

        //step1 페이징 되는 게시글들만 얻어온다.
        Pageable pageable = PageRequest.of(0, 10, Sort.by("bno").descending());

        //1페이지에 해당하는 Board 들만 추출
        Page<Object[]> pagingResult = boardRepo.listOfPage(pageable);

        //bno만 추출
        List<Integer> bnos = pagingResult.stream()
                .map(arr -> {
                    log.info(Arrays.toString(arr));
                    return Integer.parseInt(arr[0].toString());
                })
                .collect(Collectors.toList());

        List<Object[]> replies = replyRepo.listOfBnos(bnos);

        replies.forEach(arr -> {
            log.info("------------------");
            Reply reply = (Reply) arr[0];
            Board board = (Board) arr[1];

            log.info(board);
            log.info(board.getImages());
            log.info(board.getTags());

        });
    }

    @Test
    public void testQuerydsl() {

        PageRequestDTO pageRequestDTO = new PageRequestDTO();

        boardRepo.search(pageRequestDTO);

    }

}

































