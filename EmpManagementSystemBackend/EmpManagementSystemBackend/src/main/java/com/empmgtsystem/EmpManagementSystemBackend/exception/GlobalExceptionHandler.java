package com.empmgtsystem.EmpManagementSystemBackend.exception;


import com.empmgtsystem.EmpManagementSystemBackend.response.ErrorResponse;
import com.empmgtsystem.EmpManagementSystemBackend.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Response> handleResourceNotFoundException(ResourceNotFoundException e){
        Response errorResponse = new ErrorResponse(e.getMessage(), false, HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ResourceAlreadyExistsException.class)
    public ResponseEntity<Response> handleResourceAlreadyExistsException(ResourceAlreadyExistsException e){
        Response errorResponse = new ErrorResponse(e.getMessage(), false, HttpStatus.CONFLICT.value());
        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Response> handleException(Exception e) {
        Response errorResponse = new ErrorResponse(e.getMessage(), false, HttpStatus.INTERNAL_SERVER_ERROR.value());
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
