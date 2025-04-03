package org.zerock.sb2.reply.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReplyAddDTO {

    @NotBlank
    private String replyText;

    @NotBlank
    private String replyer;

    @NotNull
    private Long bno;
}
