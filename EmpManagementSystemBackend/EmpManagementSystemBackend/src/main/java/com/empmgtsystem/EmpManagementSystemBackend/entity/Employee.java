package com.empmgtsystem.EmpManagementSystemBackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Employee")
public class Employee {
    @Id
    private String empId;
    private String firstName;
    private String lastName;
    private Gender gender;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "nicNo", nullable = false, unique = true)
    private String nicNo;
    private LocalDate dateOfBirth;   //2007-12-03
    private String city;
    private District district;
    private Province province;
    private String Address;
    private String nationality;
    private String phoneNumber;
    private String designation;
    private WorkType workType;
    private Role role;
    private Status status;


    @ManyToOne
    @JoinColumn(name = "deptId", nullable = false)
    private Department department;
}
