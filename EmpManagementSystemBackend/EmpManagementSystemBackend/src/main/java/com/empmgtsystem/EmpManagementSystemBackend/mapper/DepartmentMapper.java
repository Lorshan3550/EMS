package com.empmgtsystem.EmpManagementSystemBackend.mapper;


import com.empmgtsystem.EmpManagementSystemBackend.dto.DepartmentDto;
import com.empmgtsystem.EmpManagementSystemBackend.entity.Department;

public class DepartmentMapper {

    public static DepartmentDto mapToDepartmentDto(Department department){
        return new DepartmentDto(
                department.getDeptId(),
                department.getDeptName(),
                department.getLocation()
        );
    }

    public static Department mapToDepartment(DepartmentDto departmentDto){
        return new Department(
                departmentDto.getDeptId(),
                departmentDto.getDeptName(),
                departmentDto.getLocation()
        );
    }
}
