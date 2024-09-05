package com.empmgtsystem.EmpManagementSystemBackend.service;



import com.empmgtsystem.EmpManagementSystemBackend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    void createEmployee(EmployeeDto employeeDto) throws Exception;

    EmployeeDto getEmployeeById(String empId);

    List<EmployeeDto>   getAllEmployees();

    void updateEmployee(String empId, EmployeeDto updatedEmployee);

    void deleteEmployee(String empId);
}
