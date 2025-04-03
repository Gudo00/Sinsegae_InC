package org.zerock.sb2.reply.exception;

public class ReplyException extends RuntimeException{

    private int code;

    public ReplyException(int code){
        super("REPLY-"+code);
        this.code = code;
    }

    public int getCode(){
        return this.code;
    }
}
