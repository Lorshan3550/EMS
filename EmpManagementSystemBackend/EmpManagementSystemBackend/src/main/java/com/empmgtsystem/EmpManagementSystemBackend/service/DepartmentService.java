package com.empmgtsystem.EmpManagementSystemBackend.service;

import com.empmgtsystem.EmpManagementSystemBackend.dto.DepartmentDto;
import com.empmgtsystem.EmpManagementSystemBackend.entity.Department;

import java.util.List;

public interface DepartmentService {

    void createDepartment (DepartmentDto departmentDto) throws Exception;

    DepartmentDto getDepartmentById(long deptId);

    List<DepartmentDto> getAllDepartment();

    void updateDepartment(long deptId, DepartmentDto departmentDto);

    void deleteDepartment(long deptId);
}
