package org.example.sp1.mapper;

import org.apache.ibatis.annotations.Select;

public interface TimeMapper {

    //마지막에 ;없음 주의
    //@Select("select now()")
    String getTime();

    //@Select("select adddate(now(), interval 100 day)")
    String after100();
}
