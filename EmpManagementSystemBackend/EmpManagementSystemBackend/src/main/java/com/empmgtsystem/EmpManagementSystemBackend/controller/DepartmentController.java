package com.empmgtsystem.EmpManagementSystemBackend.controller;

import com.empmgtsystem.EmpManagementSystemBackend.dto.DepartmentDto;
import com.empmgtsystem.EmpManagementSystemBackend.dto.EmployeeDto;
import com.empmgtsystem.EmpManagementSystemBackend.response.Response;
import com.empmgtsystem.EmpManagementSystemBackend.response.SuccessResponse;
import com.empmgtsystem.EmpManagementSystemBackend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/department")
@AllArgsConstructor
public class DepartmentController {
    private DepartmentService departmentService;

    // REST API - Create Department

    @PostMapping
    public ResponseEntity<Response> createDepartment(@RequestBody DepartmentDto departmentDto) throws Exception {
        departmentService.createDepartment(departmentDto);

        Response sucessResponse = new SuccessResponse(
                "Department Create Successfully",
                true,
                HttpStatus.CREATED.value()
        );

        return  ResponseEntity.status(HttpStatus.CREATED).body(sucessResponse);
    }
}
