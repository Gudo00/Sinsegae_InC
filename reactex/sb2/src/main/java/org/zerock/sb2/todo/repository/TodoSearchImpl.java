package org.zerock.sb2.todo.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.zerock.sb2.todo.entities.QTodo;
import org.zerock.sb2.todo.entities.Todo;

import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RequiredArgsConstructor
public class TodoSearchImpl implements TodoSearch{

   private final JPAQueryFactory queryFactory;

  @Override
  public List<Todo> list1(Pageable pageable) {

    log.info("list.......................");
    log.info(queryFactory);

    QTodo todo = QTodo.todo;

    JPQLQuery<Todo> query = queryFactory.selectFrom(todo);

    int size = pageable.getPageSize();
    int offset = pageable.getPageNumber() * size;

    query.limit(pageable.getPageSize());
    query.offset(offset);
    query.orderBy(new OrderSpecifier<>(Order.DESC, todo.tno));

    List<Todo> list = query.fetch();

    return list;
  }
  
}
