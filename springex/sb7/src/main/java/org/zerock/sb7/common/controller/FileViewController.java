package org.zerock.sb7.common.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.zerock.sb7.util.FileUploadUtil;

@Controller
@RequiredArgsConstructor
public class FileViewController {

    private final FileUploadUtil fileUploadUtil;

    @GetMapping("/view/{fileName}")
    public ResponseEntity<Resource> viewFile(@PathVariable String fileName) {

        return fileUploadUtil.getFile(fileName);
    }
}
