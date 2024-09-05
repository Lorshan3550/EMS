package com.empmgtsystem.EmpManagementSystemBackend.service.impl;

import com.empmgtsystem.EmpManagementSystemBackend.dto.DepartmentDto;
import com.empmgtsystem.EmpManagementSystemBackend.entity.Department;
import com.empmgtsystem.EmpManagementSystemBackend.entity.Employee;
import com.empmgtsystem.EmpManagementSystemBackend.exception.ResourceAlreadyExistsException;
import com.empmgtsystem.EmpManagementSystemBackend.exception.ResourceNotFoundException;
import com.empmgtsystem.EmpManagementSystemBackend.mapper.DepartmentMapper;
import com.empmgtsystem.EmpManagementSystemBackend.mapper.EmployeeMapper;
import com.empmgtsystem.EmpManagementSystemBackend.repository.DepartmentRepository;
import com.empmgtsystem.EmpManagementSystemBackend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;
    @Override
    public void createDepartment(DepartmentDto departmentDto) throws Exception {
        if(departmentRepository.existsById(departmentDto.getDeptId())) {
            throw new ResourceAlreadyExistsException("Employee already exists");
        }

        Department department = DepartmentMapper.mapToDepartment(departmentDto);


        departmentRepository.save(department);
    }

    @Override
    public DepartmentDto getDepartmentById(long deptId) {
        return null;
    }

    @Override
    public List<DepartmentDto> getAllDepartment() {
        return null;
    }

    @Override
    public void updateDepartment(long deptId, DepartmentDto departmentDto) {

    }

    @Override
    public void deleteDepartment(long deptId) {

    }
}
