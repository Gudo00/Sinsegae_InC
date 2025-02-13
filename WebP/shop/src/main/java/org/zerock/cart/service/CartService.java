package org.zerock.cart.service;

import java.util.List;

import org.zerock.cart.dao.CartDAO;
import org.zerock.cart.dto.CartItemDTO;

public enum CartService {
	INSTANCE;
	
	public boolean addItem(String uid, Integer pno)throws Exception {
		
		return CartDAO.INSTANCE.addItem(uid, pno);
		
	}
	
	public List<CartItemDTO> getCartItems(String uid)throws Exception {
		
		return CartDAO.INSTANCE.getItems(uid);
	}
}
