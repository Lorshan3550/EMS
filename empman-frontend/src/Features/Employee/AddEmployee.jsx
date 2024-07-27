// AddEmployee.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';

const AddEmployee = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      // const requestData = {
      //  empId : data.empId,
      //  firstName : data.firstName,
      //  lastName : data.lastName,
      //  gender : data.gender,
      //  email : data.email,
      //  nicNo : data.nicNo,
      //  dateOfBirth : data.dateOfBirth,
      //  city : data.city,
      //  district : data.district.value,
      //  province : data.province.value,
      //  nationality : data.nationality,
      //  phoneNumber : data.phoneNumber,
      //  designation : data.designation,
      //  workType : data.workType,
      //  role : data.role,
      //  status : data.status,
      //  department : {
      //    deptId : data.deptName.value,
      //  },
      //  address : data.address
      // }

      const districtValue = data.district ? data.district.value : '';
      const provinceValue = data.province ? data.province.value : '';
      const departmentId = data.department ? data.department.value : '';

      const requestData = {
        ...data,
        district: districtValue,
        province: provinceValue,
        department: {
          deptId: departmentId
        }
      }
      console.log("Input data", requestData)
      const response = await axios.post("http://localhost:8080/api/employee", requestData)
      console.log("Response ", response)
      setOpen(true)

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <EmployeeForm
        onSubmit={onSubmit} isEditMode={false} />
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical : "top", horizontal : "center" }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Employee Registered Successfully
        </Alert>
      </Snackbar>
    </>

  );
};

export default AddEmployee;
