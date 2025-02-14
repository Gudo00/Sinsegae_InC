package org.zerock.controller;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;

import javax.imageio.ImageIO;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * Servlet implementation class TempImageMaker
 */
@WebServlet("/temp")
public class TempImageMaker extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TempImageMaker() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		//메모리 상에 이미지 생성 
		BufferedImage image = new BufferedImage(300, 150, BufferedImage.TYPE_INT_RGB);
		
		//붓 
		Graphics g = image.getGraphics();
		g.setColor(Color.PINK);
		g.fillRect(0, 0, 300, 150);
		g.setColor(Color.BLACK);
		
		int value = (int)(Math.random() * 10000);
		
		HttpSession session = request.getSession();
		
		session.setAttribute("temp", ""+value);
		
		g.setFont(new Font("Arial", Font.BOLD, 24));
		g.drawString(""+ value, 30, 100);
		
		response.setContentType("image/jpeg");
		response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // 캐시 방지
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "0");
		
		OutputStream out = response.getOutputStream();
		
		ImageIO.write(image, "JPG", out);
		
		out.close();
		
		
	}



}