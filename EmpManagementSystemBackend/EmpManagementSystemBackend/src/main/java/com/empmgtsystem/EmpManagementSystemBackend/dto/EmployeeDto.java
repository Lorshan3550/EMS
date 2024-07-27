package com.empmgtsystem.EmpManagementSystemBackend.dto;



import com.empmgtsystem.EmpManagementSystemBackend.entity.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {
    private String empId;
    private String firstName;
    private String lastName;
    private Gender gender;
    private String email;
    private String nicNo;
    private LocalDate dateOfBirth;
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

    private DepartmentDto department;

    @Override
    public String toString() {
        return "EmployeeDto{" +
                "empId='" + empId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", nicNo='" + nicNo + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", city='" + city + '\'' +
                ", district=" + district +
                ", province=" + province +
                ", Address='" + Address + '\'' +
                ", nationality='" + nationality + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", designation='" + designation + '\'' +
                ", workType=" + workType +
                ", role=" + role +
                ", status=" + status +
                ", department=" + department +
                '}';
    }
}
