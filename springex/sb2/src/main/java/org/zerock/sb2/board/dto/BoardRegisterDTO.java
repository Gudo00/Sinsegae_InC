package org.zerock.sb2.board.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BoardRegisterDTO {

  @NotBlank(message = "Title cannot be blank")
  private String title;

  @NotBlank
  private String content;

  @NotBlank
  private String writer;
}
