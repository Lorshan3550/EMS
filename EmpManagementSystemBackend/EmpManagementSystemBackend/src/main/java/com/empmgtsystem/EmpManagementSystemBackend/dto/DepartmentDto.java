package com.empmgtsystem.EmpManagementSystemBackend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class DepartmentDto {
    private long deptId;
    private String deptName;
    private String Location;
}
