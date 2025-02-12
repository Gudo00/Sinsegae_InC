package org.zerock.product.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.zerock.product.dto.ProductDTO;

import lombok.Cleanup;


//create table tbl_product (
//	    pno int primary key auto_increment,
//	    pname varchar(200) not null,
//	    price int not null,
//	    img varchar(200) not null,
//	    regdate timestamp default now(),
//	    modDate timestamp default now()
//	)
//	;
//
//
//	insert into tbl_product (pname, price, img) values ('P1', 3000, '1.jpg')
//	;
//
//
//	insert into tbl_product (pname, price, img) values ('P2', 4000, '2.jpg')
//	;
//
//	insert into tbl_product (pname, price, img) values ('P3', 5000, '3.jpg')
//	;
//
//	insert into tbl_product (pname, price, img) values ('P4', 6000, '4.jpg')
//	;
//
//	insert into tbl_product (pname, price, img) values ('P5', 7000, '5.jpg')
//	;
//
//
//	select * from tbl_product;

public enum ProductDAO {

	INSTANCE;
	
	
	public void insert(ProductDTO productDTO)throws Exception{
	
		//insert into tbl_product (pname, price, img) values ('P1', 3000, '1.jpg')
		String sql = "insert into tbl_product (pname, price, img) values (?, ?, ?)";

		@Cleanup
		Connection conn = ConnectionUtil.INSTANCE.getConnection();
		@Cleanup
		PreparedStatement pstmt = conn.prepareStatement(sql);

		pstmt.setString(1, productDTO.getPname());
		pstmt.setInt(2, productDTO.getPrice());
		pstmt.setString(3, productDTO.getImg());
		

		// DML - insert, update, delete 결과가 몇 개의 행이 영향을 받았는지
		int count = pstmt.executeUpdate();

		if (count != 1) {
			throw new Exception("INSERT ERROR NOT 1");
		}
	}
	
	public List<ProductDTO> list(int page) throws Exception {

		//마지막에 ; 주의 없어야 함 
		String query = """
				select
					*
				from
					tbl_product
				where
					pno > 0
				order by
				  pno desc
				limit 10 OFFSET ? """;
		
		@Cleanup
		Connection conn = ConnectionUtil.INSTANCE.getConnection();
		@Cleanup
		PreparedStatement pstmt = conn.prepareStatement(query);
		//물음표에 값 할당 - DB에서는 SQL을 컴파일이 완료된 후에 전달한 값을 파라미터화 
		pstmt.setInt(1, (page - 1) * 10);
		
		@Cleanup
		ResultSet rs = pstmt.executeQuery();
		
		
		List<ProductDTO> list = new ArrayList<>();
		
		while(rs.next()) {
			//tno, title, writer, regdate
			ProductDTO dto = ProductDTO.builder()
					.pno(rs.getInt("pno"))
					.pname(rs.getString("pname"))
					.price(rs.getInt("price"))
					.img(rs.getString("img"))
					.regDate(rs.getTimestamp("regDate").toLocalDateTime())
					.build();
			
			//만들어진 객체를 담는다. 
			list.add(dto);
			
		}//end while

		return list;
	}
	
	public ProductDTO selectOne(Integer pno)throws Exception {
		
		String query = "select * from tbl_product where pno = ? ";
		
		@Cleanup
		Connection conn = ConnectionUtil.INSTANCE.getConnection();
		@Cleanup
		PreparedStatement pstmt = conn.prepareStatement(query);
		
		pstmt.setInt(1, pno);
		
		@Cleanup
		ResultSet rs = pstmt.executeQuery();
		
		boolean nextResult = rs.next();
		
		if( !nextResult ) {
			throw new Exception("NOT FOUND");
		}

		ProductDTO productDTO = ProductDTO.builder()
				.pno(rs.getInt("pno"))
				.pname(rs.getString("pname"))
				.price(rs.getInt("price"))
				.img(rs.getString("img"))
				.regDate(rs.getTimestamp("regDate").toLocalDateTime())
				.modDate(rs.getTimestamp("modDate").toLocalDateTime())
				.build();
		
		
		return productDTO;
	}
	
	public int getTotal()throws Exception {
		
		@Cleanup Connection conn = ConnectionUtil.INSTANCE.getConnection();
		
		@Cleanup PreparedStatement pstmt
		  = conn.prepareStatement("select count(*) from tbl_product");
		
		//ResultSet은 빨대 
		@Cleanup ResultSet rs = pstmt.executeQuery();
		
		//뚜껑따기 
		rs.next();
		
		int result = rs.getInt(1);
		
		return result;
		
	}
	
}
