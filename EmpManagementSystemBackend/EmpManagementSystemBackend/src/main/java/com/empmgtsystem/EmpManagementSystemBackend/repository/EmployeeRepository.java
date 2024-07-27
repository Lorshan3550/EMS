package com.empmgtsystem.EmpManagementSystemBackend.repository;


import com.empmgtsystem.EmpManagementSystemBackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,String> {
}
