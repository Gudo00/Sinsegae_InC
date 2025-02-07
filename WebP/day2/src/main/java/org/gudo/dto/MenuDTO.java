package org.gudo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// 데이터 위주의 클래스
// 여러 개, 자주
// 인스턴스 변수가 우선
// 식별 값을 가지는 경우가 많다.
// 명사

@Data // Getter, Setter... etc (만능)
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MenuDTO {
	
	// 메뉴 번호
	private Long mno;
	
	private String mname;
	
	private String fileName;
	
	private int price; // 외국이면 double이 맞는듯
	
	private String description;
}
