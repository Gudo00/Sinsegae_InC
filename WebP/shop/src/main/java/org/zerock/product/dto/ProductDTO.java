package org.zerock.product.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

	private Integer pno;
	private String pname;
	private int price;
	private String img;
	
	private LocalDateTime regDate;
	private LocalDateTime modDate;
	
}
