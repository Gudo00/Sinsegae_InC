package org.gudo.service;

import java.util.List;

import org.gudo.dto.MenuDTO;

public class MenuService {
	
	public List<MenuDTO> getMenus(){
		
		return List.of(
				MenuDTO.builder().mno(1L).mname("THE ORIGINAL PRINCE").price(27).fileName("pizza1.jpg").description("Original Pizza Sauce, Shredded Mozzarella").build(),
				MenuDTO.builder().mno(2L).mname("BOOZEY BROOME").price(13).fileName("pizza2.jpg").description("Vodka Sauce (contains Prosciutto), Fresh Mozzarella, Pecorino Roman").build(),
				MenuDTO.builder().mno(3L).mname("SPICY SPRING Squares").price(41).fileName("pizza3.jpg").description("Fra Diavolo Sauce, Pepperoni, Fresh Mozzarella, Pecorino Romano").build()
				);
				
		
//		List<MenuDTO> list = new ArrayList<>();
//		list.add(
//				MenuDTO.builder().
//				mno(1L).
//				mname("Pizza")
//				.price(2000)
//				.fileName("pizza.jpg")
//				.build()
//				);
//		
//		
//		return list;
		
	}

}
