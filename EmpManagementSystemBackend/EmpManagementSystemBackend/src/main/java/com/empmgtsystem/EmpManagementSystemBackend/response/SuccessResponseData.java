package com.empmgtsystem.EmpManagementSystemBackend.response;


import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SuccessResponseData<T> extends Response {
    private T result;

    public SuccessResponseData(String message, boolean success, int status, T result) {
        super(message, success, status);
        this.result = result;
    }

}
