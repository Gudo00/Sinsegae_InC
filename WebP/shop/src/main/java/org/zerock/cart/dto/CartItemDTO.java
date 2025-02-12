package org.zerock.cart.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

// cino, uid, pno, aty, 
public class CartItemDTO {
	
	private Integer cino;
	private String uid;
	private Integer pno;
	private int qty;

}
