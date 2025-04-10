package org.zerock.sb7.sample.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Data
public class SampleUploadDTO {

    private String title;

    private List<MultipartFile> files = new ArrayList<>();

    private List<String> uploadedFileNames;

}
