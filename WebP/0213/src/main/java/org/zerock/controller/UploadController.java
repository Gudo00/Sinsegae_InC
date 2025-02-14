package org.zerock.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Collection;
import java.util.UUID;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import net.coobird.thumbnailator.Thumbnails;

/**
 * Servlet implementation class UploadController
 */
@WebServlet("/upload")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024 * 2,
        maxFileSize = 1024 * 1024 * 20,
        maxRequestSize = 1024 * 1024 * 100
)
public class UploadController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UploadController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		System.out.println("Upload doGET");
		
		request.getRequestDispatcher("/WEB-INF/views/upload.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String pname = request.getParameter("pname");
		
		System.out.println(pname);
		
		Collection<Part> parts = request.getParts();
		
		System.out.println(parts);
		
		parts.forEach(p -> {
			
			System.out.println("-------------------------");
			System.out.println(p.getContentType());
			
			String partName = p.getName();
			
			if(partName.equals("files")) {
				
				String saveName = UUID.randomUUID().toString()+"_"+p.getSubmittedFileName();
				
				try (
						InputStream in = p.getInputStream();
						OutputStream fos = 
								new FileOutputStream("C:\\nginx-1.26.3\\html\\"+ saveName)
						) {
					
						byte[] buffer = new byte[1024*8];
						
						while(true) {
							int count = in.read(buffer);
							if(count == -1) {break;}
							fos.write(buffer,0, count);
						}
						
						fos.close();
						
						Thumbnails.of(new java.io.File("C:\\nginx-1.26.3\\html\\"+ saveName))
						.size(200, 200)
						.toFile(new java.io.File("C:\\nginx-1.26.3\\html\\s_"+ saveName));
						
					
					
				}catch(Exception e) {
					e.printStackTrace();
				}
			}//end if
			
			
		});
		

		
	}

}