package org.zerock.cart.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.zerock.cart.dto.CartItemDTO;
import org.zerock.product.dao.ConnectionUtil;

import lombok.Cleanup;

public enum CartDAO {

	INSTANCE;
	
	public boolean addItem(String uid, Integer pno)throws Exception {

		String update = "update tbl_user_cart set qty = qty+1 where uid = ? and pno = ?";

		@Cleanup
		Connection conn = ConnectionUtil.INSTANCE.getConnection();
		@Cleanup
		PreparedStatement pstmt = conn.prepareStatement(update);
		
		pstmt.setString(1, uid);
		pstmt.setInt(2, pno);
		
		int count = pstmt.executeUpdate();
		
		if(count == 1) {
			return true;
		}
		
		
		if(count == 0) {
			
			String insert = "insert into tbl_user_cart (uid , pno) values (?,?)";
			
			@Cleanup
			PreparedStatement pstmtInsert = conn.prepareStatement(insert);
			pstmtInsert.setString(1, uid);
			pstmtInsert.setInt(2, pno);
			
			int insertCount = pstmtInsert.executeUpdate();
			
			if(insertCount != 1) {
				throw new Exception("INSERT ERROR");
			}
			
		}
		
		return false;
		
		
	}
	
	public List<CartItemDTO> getItems(String uid) throws Exception {
		
		String query = "select cino, uid, pno, qty from tbl_user_cart where uid=? "
				+ "order by cino desc";
		
		@Cleanup
		Connection con = ConnectionUtil.INSTANCE.getConnection();
		
		@Cleanup
		PreparedStatement pstmt = con.prepareStatement(query);
		
		pstmt.setString(1, uid);
		
		@Cleanup 
		ResultSet rs = pstmt.executeQuery();
		
		List<CartItemDTO> cartItems = new ArrayList<>();
		
		while(rs.next()) {
			
			CartItemDTO dto = CartItemDTO.builder()
					.cino(rs.getInt("cino"))
					.uid(rs.getString("uid"))
					.pno(rs.getInt("pno"))
					.qty(rs.getInt("qty"))
					.build();
			
			cartItems.add(dto);
		}
		
		return cartItems;
	}
}
