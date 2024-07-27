package com.empmgtsystem.EmpManagementSystemBackend.repository;


import com.empmgtsystem.EmpManagementSystemBackend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department,Long> {
}
