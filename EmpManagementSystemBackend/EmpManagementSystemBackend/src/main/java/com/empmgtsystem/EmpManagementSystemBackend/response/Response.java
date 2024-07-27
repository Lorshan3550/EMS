package com.empmgtsystem.EmpManagementSystemBackend.response;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class Response {
    private String message;
    private boolean success;
    private int status;

    public Response(String message, boolean success, int status) {
        this.message = message;
        this.success = success;
        this.status = status;
    }


}
