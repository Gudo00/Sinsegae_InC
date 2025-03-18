package org.example.db;

import com.zaxxer.hikari.HikariDataSource;
import lombok.extern.log4j.Log4j2;
import org.example.sp1.mapper.TimeMapper;
import org.example.sp1.service.HelloService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.sql.Connection;
import java.sql.SQLException;

@ExtendWith(SpringExtension.class)
@Log4j2
@ContextConfiguration("file:src/main/webapp/WEB-INF/root-context.xml")
public class DBTests {

    @Autowired
    HikariDataSource ds;

    @Autowired(required = false)
    TimeMapper timeMapper;

    @Test
    public void testTime() throws SQLException {

        log.info(timeMapper.getClass().getName());

        log.info(timeMapper.getTime());
    }

    @Test
    public void test100() {

        log.info(timeMapper.after100());

    }


    @Test
    public void testDB() {
        log.info("testDB");
        log.info(ds);
    }

    @Test
    public void testDB2() throws Exception{

        Connection conn = ds.getConnection();

        log.info(conn);

        conn.close();

    }

}












