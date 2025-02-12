package org.zerock.product.service;

import java.util.List;

import org.zerock.product.dao.ProductDAO;
import org.zerock.product.dto.ProductDTO;

public enum ProductService {

	INSTANCE;
	
	public void add(ProductDTO productDTO) throws Exception{
		

		ProductDAO.INSTANCE.insert(productDTO);
		
		
	}
	
	public List<ProductDTO> getList(int page)throws Exception {
		
		return ProductDAO.INSTANCE.list(page);
		
	}
	
	public int getTotal()throws Exception {
		
		return ProductDAO.INSTANCE.getTotal();
	}
	
	public ProductDTO getOne(Integer pno)throws Exception {
		
		return ProductDAO.INSTANCE.selectOne(pno);
	}
}
