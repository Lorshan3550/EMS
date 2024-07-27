package com.empmgtsystem.EmpManagementSystemBackend.mapper;


import com.empmgtsystem.EmpManagementSystemBackend.dto.DepartmentDto;
import com.empmgtsystem.EmpManagementSystemBackend.dto.EmployeeDto;
import com.empmgtsystem.EmpManagementSystemBackend.entity.Department;
import com.empmgtsystem.EmpManagementSystemBackend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setEmpId(employee.getEmpId());
        employeeDto.setFirstName(employee.getFirstName());
        employeeDto.setGender(employee.getGender());
        employeeDto.setLastName(employee.getLastName());
        employeeDto.setEmail(employee.getEmail());
        employeeDto.setNicNo(employee.getNicNo());
        employeeDto.setDateOfBirth(employee.getDateOfBirth());
        employeeDto.setCity(employee.getCity());
        employeeDto.setDistrict(employee.getDistrict());
        employeeDto.setProvince(employee.getProvince());
        employeeDto.setAddress(employee.getAddress());
        employeeDto.setNationality(employee.getNationality());
        employeeDto.setPhoneNumber(employee.getPhoneNumber());
        employeeDto.setRole(employee.getRole());
        employeeDto.setDesignation(employee.getDesignation());
        employeeDto.setWorkType(employee.getWorkType());
        employeeDto.setStatus(employee.getStatus());

        if (employee.getDepartment() != null) {
            Department department = employee.getDepartment();
            DepartmentDto departmentDto = DepartmentMapper.mapToDepartmentDto(department);
            //DepartmentDto departmentDto = new DepartmentDto();
            //departmentDto.setDeptId(employeeDto.getDepartment().getDeptId());
            employeeDto.setDepartment(departmentDto);
        }

        return employeeDto;
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        Employee employee = new Employee();

        employee.setEmpId(employeeDto.getEmpId());
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setGender((employeeDto.getGender()));
        employee.setEmail(employeeDto.getEmail());
        employee.setNicNo(employeeDto.getNicNo());
        employee.setDateOfBirth(employeeDto.getDateOfBirth());
        employee.setCity(employeeDto.getCity());
        employee.setDistrict(employeeDto.getDistrict());
        employee.setProvince(employeeDto.getProvince());
        employee.setAddress(employeeDto.getAddress());
        employee.setNationality(employeeDto.getNationality());
        employee.setPhoneNumber(employeeDto.getPhoneNumber());
        employee.setRole(employeeDto.getRole());
        employee.setDesignation(employeeDto.getDesignation());
        employee.setWorkType(employeeDto.getWorkType());
        employee.setStatus(employeeDto.getStatus());

        if(employeeDto.getDepartment() != null){
            Department department = new Department();
            department.setDeptId(employeeDto.getDepartment().getDeptId());
            employee.setDepartment(department);
        }

        return employee;
    }
}
