package com.empmgtsystem.EmpManagementSystemBackend.service.impl;


import com.empmgtsystem.EmpManagementSystemBackend.dto.EmployeeDto;
import com.empmgtsystem.EmpManagementSystemBackend.entity.Department;
import com.empmgtsystem.EmpManagementSystemBackend.entity.Employee;
import com.empmgtsystem.EmpManagementSystemBackend.exception.ResourceAlreadyExistsException;
import com.empmgtsystem.EmpManagementSystemBackend.exception.ResourceNotFoundException;
import com.empmgtsystem.EmpManagementSystemBackend.mapper.EmployeeMapper;
import com.empmgtsystem.EmpManagementSystemBackend.repository.DepartmentRepository;
import com.empmgtsystem.EmpManagementSystemBackend.repository.EmployeeRepository;
import com.empmgtsystem.EmpManagementSystemBackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;
//    private Logger logger = LoggerFactory.getLogger(getClass());
    @Override
    public void createEmployee(EmployeeDto employeeDto)  {
        if (employeeRepository.existsById(employeeDto.getEmpId())) {
            throw new ResourceAlreadyExistsException("Employee already exists");
        }

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        // Check deptId exists in Department table
        Department department = departmentRepository.findById(employeeDto.getDepartment().getDeptId())
                .orElseThrow(() -> new ResourceNotFoundException("Department Not Found"));

        employee.setDepartment(department);
        employeeRepository.save(employee);

    }

    @Override
    public EmployeeDto getEmployeeById(String empId) {
        Employee employee = employeeRepository.findById(empId).orElseThrow(
                () -> new ResourceNotFoundException("Employee Not Found")
        );

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map((EmployeeMapper::mapToEmployeeDto)).toList();
    }

    @Override
    public void updateEmployee(String empId, EmployeeDto updatedEmployee) {
        Employee employee = employeeRepository.findById(empId).orElseThrow(
                () -> new ResourceNotFoundException("Employee Not Found")
        );

        if(!employee.getEmail().equals(updatedEmployee.getEmail())){
            employee.setEmail(updatedEmployee.getEmail());
        }

        if(employee.getNicNo().equals(updatedEmployee.getNicNo())){
            employee.setNicNo(updatedEmployee.getNicNo());
        }

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setGender(updatedEmployee.getGender());
        employee.setAddress(updatedEmployee.getAddress());
        employee.setDateOfBirth(updatedEmployee.getDateOfBirth());
        employee.setCity(updatedEmployee.getCity());
        employee.setDistrict(updatedEmployee.getDistrict());
        employee.setProvince(updatedEmployee.getProvince());
        employee.setPhoneNumber(updatedEmployee.getPhoneNumber());
        employee.setAddress(updatedEmployee.getAddress());
        employee.setDesignation(updatedEmployee.getDesignation());
        employee.setWorkType(updatedEmployee.getWorkType());
        employee.setRole(updatedEmployee.getRole());
        employee.setStatus(updatedEmployee.getStatus());
        employee.setNationality(updatedEmployee.getNationality());

        if (updatedEmployee.getDepartment() != null) {
            Department department = departmentRepository.findById(updatedEmployee.getDepartment().getDeptId())
                    .orElseThrow(() -> new ResourceNotFoundException("Department Not Found"));
            employee.setDepartment(department);
        }



        employeeRepository.save(employee);




    }

    @Override
    public void deleteEmployee(String empId) {
        Employee employee = employeeRepository.findById(empId).orElseThrow(
                () -> new ResourceNotFoundException("Employee Not Found")
        );

        employeeRepository.deleteById(employee.getEmpId());
    }
}
