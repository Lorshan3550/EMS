package com.empmgtsystem.EmpManagementSystemBackend.response;




public class ErrorResponse extends Response {


    public ErrorResponse(String message, boolean success, int status) {
        super(message, success, status);
    }


}
