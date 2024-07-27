package com.empmgtsystem.EmpManagementSystemBackend.controller;




import com.empmgtsystem.EmpManagementSystemBackend.dto.EmployeeDto;
import com.empmgtsystem.EmpManagementSystemBackend.response.Response;
import com.empmgtsystem.EmpManagementSystemBackend.response.SuccessResponse;
import com.empmgtsystem.EmpManagementSystemBackend.response.SuccessResponseData;
import com.empmgtsystem.EmpManagementSystemBackend.service.EmployeeSerice;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/employee")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class EmployeeController {

    private EmployeeSerice employeeSerice;

    // REST API - Get all Employee
    @GetMapping
    public ResponseEntity<Response> getAllEmployee(){
        List<EmployeeDto> allEmployees = employeeSerice.getAllEmployees();
        Response  successResponseData = new SuccessResponseData<>(
                "Employees fetched successfully",
                true,
                HttpStatus.OK.value(),
                allEmployees
        );
        //return ResponseEntity.status(HttpStatus.OK).body(response);
        return ResponseEntity.ok(successResponseData);
    }

    // REST API - create employee
    @PostMapping
    public ResponseEntity<Response> createEmployee(@RequestBody EmployeeDto employeeDto) throws Exception {
        employeeSerice.createEmployee(employeeDto);
        Response successResponse = new SuccessResponse(
                "Employee Created Successfully",
                true,
                HttpStatus.CREATED.value()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(successResponse);
    }

    //REST API - GET employee by Id
    @GetMapping("{id}")
    public ResponseEntity<Response> getEmployeeById (@PathVariable("id") String empId){
        EmployeeDto employeeDto = employeeSerice.getEmployeeById(empId);
        Response successResponseData = new SuccessResponseData<EmployeeDto>(
                "Employee fetched successfully",
                true,
                HttpStatus.OK.value(),
                employeeDto
        );
        return ResponseEntity.ok(successResponseData);
    }

    // REST API - Update Employee by empId
    @PutMapping("{id}")
    public ResponseEntity<Response> updateEmployeeById (@PathVariable("id") String empId, @RequestBody EmployeeDto employeeDto){
        employeeSerice.updateEmployee(empId,employeeDto);
        Response successResponse = new SuccessResponse(
                "Employee Updated Successfully",
                true,
                HttpStatus.OK.value()
        );
        return ResponseEntity.status(HttpStatus.OK).body(successResponse);
    }

    //REST API - Delete employee by empId
    @DeleteMapping("{id}")
    public ResponseEntity<Response> deleteEmployeeById(@PathVariable("id") String empId){
        employeeSerice.deleteEmployee(empId);
        Response successResponse = new SuccessResponse(
                "Employee Deleted Successfully",
                true,
                HttpStatus.OK.value()

        );
        return ResponseEntity.status(HttpStatus.OK).body(successResponse);

    }

}
