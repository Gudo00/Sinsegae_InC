package org.example.sample1;

import java.io.*;

import com.google.gson.Gson;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //브라우저에게 JSON데이터를 보낸다고 얘기함
        response.setContentType("application/json");
        //키(V1,V2,V3)
        java.util.Map<String,String> dataMap
                = java.util.Map.of("V1","AAA","V2","BBB","V3","CCC");

        Gson gson = new Gson();
        String json = gson.toJson(dataMap); //객체를 JSON으로 만들고 있음

        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        // Hello
        PrintWriter out = response.getWriter();
        out.println(json);
        out.close();
    }

    public void destroy() {
    }
}