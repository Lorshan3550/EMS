// UpdateEmployee.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';
import SnackbarBox from '../../components/SnackbarBox';

const UpdateEmployee = () => {
  const [employee, setEmployee] = useState([]);
  const { empId } = useParams();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [updateMessage, setUpdateMessage] = useState(null);


  const handleSnackbarClose = async (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/employee/${empId}`);
        //console.log(response)
        setEmployee(response.data.result);
        //console.log(employee)
      } catch (error) {
        console.log("There was an error!", error);
      }
    };

    fetchEmployee();
  }, [empId]);

  const onSubmit = async (data) => {
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
    try {
      const response = await axios.put(`http://localhost:8080/api/employee/${empId}`, requestData);
      console.log(response)
      setUpdateMessage(response.data.message)
      //alert("Employee updated successfully");
      setOpenSnackbar(true)
      //navigate('/employeeReport');
    } catch (error) {
      console.log("There was an error!", error);
      alert("Error updating employee");
    }
  };

  return employee ?
    (
      <>
        <EmployeeForm onSubmit={onSubmit} defaultValues={employee} isEditMode={true} />

        <SnackbarBox
          openSnackbar={openSnackbar}
          handleSnackbarClose={handleSnackbarClose}
          message={updateMessage}
          severity={"success"}
        />
      </>
    ) : <div>Loading...</div>;
};

export default UpdateEmployee;
