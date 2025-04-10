package org.zerock.sb7.member.repo;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.zerock.sb7.member.domain.Member;

public interface MemberRepo extends JpaRepository<Member, String> {

    @EntityGraph(attributePaths = {"roleSet"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("select m from Member m where m.mid = :mid")
    Member selectOne( @Param("mid") String mid);

}
