import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextField, Button, MenuItem, Autocomplete, Box, Grid, Stack, Typography } from '@mui/material';
import axios from 'axios';
import TextBox from '../../components/TextBox';
import SelectBox from '../../components/SelectBox';
import AutoCompleteBox from '../../components/AutoCompleteBox';
import DateBox from '../../components/DateBox';

const sriLankaDistricts = [
  { label: "Ampara", value: "AMPARA" },
  { label: "Anuradhapura", value: "ANURADHAPURA" },
  { label: "Badulla", value: "BADULLA" },
  { label: "Batticaloa", value: "BATTICALOA" },
  { label: "Colombo", value: "COLOMBO" },
  { label: "Galle", value: "GALLE" },
  { label: "Gampaha", value: "GAMPAHA" },
  { label: "Hambantota", value: "HAMBANTOTA" },
  { label: "Jaffna", value: "JAFFNA" },
  { label: "Kalutara", value: "KALUTARA" },
  { label: "Kandy", value: "KANDY" },
  { label: "Kegalle", value: "KEGALLE" },
  { label: "Kilinochchi", value: "KILINOCHCHI" },
  { label: "Kurunegala", value: "KURUNEGALA" },
  { label: "Mannar", value: "MANNAR" },
  { label: "Matale", value: "MATALE" },
  { label: "Matara", value: "MATARA" },
  { label: "Monaragala", value: "MONARAGALA" },
  { label: "Mullaitivu", value: "MULLAITIVU" },
  { label: "Nuwara Eliya", value: "NUWARA_ELIYA" },
  { label: "Polonnaruwa", value: "POLONNARUWA" },
  { label: "Puttalam", value: "PUTTALAM" },
  { label: "Ratnapura", value: "RATNAPURA" },
  { label: "Trincomalee", value: "TRINCOMALEE" },
  { label: "Vavuniya", value: "VAVUNIYA" }
];


const provinces = [
  { label: "Western", value: "WESTERN" },
  { label: "Central", value: "CENTRAL" },
  { label: "Southern", value: "SOUTHERN" },
  { label: "Northern", value: "NORTHERN" },
  { label: "Eastern", value: "EASTERN" },
  { label: "North Western", value: "NORTH_WESTERN" },
  { label: "North Central", value: "NORTH_CENTRAL" },
  { label: "Uva", value: "UVA" },
  { label: "Sabaragamuwa", value: "SABARAGAMUWA" }
];

const departments = [
  { label: "Human Resources", value: "110" },
]

const EmployeeForm = ({ onSubmit, defaultValues, isEditMode }) => {
  // const { register, handleSubmit, formState: { errors }, control , reset} = useForm({
  //   defaultValues: defaultValues || {
  //     gender: '',
  //     workType: '',
  //     role: '',
  //     status: '',
  //     province: { label: '', value: '' },
  //     district: { label: '', value: '' },
  //     department: { label: '', value: '' },
  //   }
  // });

  const { register, handleSubmit, formState: { errors }, control , reset, setValue} = useForm()
  

  useEffect(() => {
    if (defaultValues) {
      console.log(defaultValues)
      reset({
        ...defaultValues,
        gender: defaultValues.gender || null,
        workType: defaultValues.workType || null,
        role: defaultValues.role || null,
        status: defaultValues.status || null,
        district: sriLankaDistricts.find(d => d.value === defaultValues.district) || null,
        province: provinces.find(p => p.value === defaultValues.province) || null,
        department: departments.find(d => d.value === defaultValues.department?.deptId) || null,
      });
    }
  }, [defaultValues, reset]);



  return (
    <Stack sx={{ margin: 5 }} direction={'column'} spacing={5} justifyContent="center" alignItems="center">
      <Typography variant='h4'>{isEditMode ? 'Update Employee' : 'Employee Registration Form'}</Typography>
      <Grid container spacing={2}>
        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="empId" control={control} label="Employee ID" rules={{ required: 'Employee ID is required' }} disabled={isEditMode} edit={isEditMode} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="firstName" control={control} label="First Name" rules={{ required: 'First Name is required' }} edit={isEditMode} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="lastName" control={control} label="Last Name" rules={{ required: 'Last Name is required' }} edit={isEditMode} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="address" control={control} label="Address" edit={isEditMode}/>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="email" control={control} label="Email" type="email" rules={{ required: 'Email is required' }} edit={isEditMode}/>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <DateBox name="dateOfBirth" control={control} label="Date of Birth" />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <SelectBox name="gender" control={control} label="Gender" rules={{ required: 'Gender is required' }} options={[{ label: 'Male', value: 'MALE' }, { label: 'Female', value: 'FEMALE' }]} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="nicNo" control={control} label="NIC Number" rules={{ required: 'NIC Number is required' }} edit={isEditMode}/>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="city" control={control} label="City" edit={isEditMode}/>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <AutoCompleteBox name="province" control={control} label="Province" options={provinces} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <AutoCompleteBox name="district" control={control} label="District" options={sriLankaDistricts} rules={{ required: 'District is required' }} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="nationality" control={control} label="Nationality" edit={isEditMode}/>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="phoneNumber" control={control} label="Phone Number" edit={isEditMode}/>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <TextBox name="designation" control={control} label="Designation" edit={isEditMode}/>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <SelectBox name="workType" control={control} label="WorkType" rules={{ required: 'WorkType is required' }} options={[{ label: 'Intern', value: 'INTERN' }, { label: 'Fulltime', value: 'FULLTIME' }, { label: 'Contract', value: 'CONTRACT' }, { label: 'PartTime', value: 'PARTTIME' }]} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <SelectBox name="role" control={control} label="Role" rules={{ required: 'Role is required' }} options={[{ label: 'User', value: 'USER' }, { label: 'Admin', value: 'ADMIN' }]} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <SelectBox name="status" control={control} label="Status" rules={{ required: 'Status is required' }} options={[{ label: 'Active', value: "ACTIVE" }, { label: 'Inactive', value: 'INACTIVE' }]} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <AutoCompleteBox name="department" control={control} label="Department" options={departments} rules={{ required: 'Department is required' }} />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                {isEditMode ? 'Update Employee' : 'Add Employee'}
              </Button>
            </Grid>


          </Grid>
        </Box>
      </Grid>
    </Stack>
  );
};

export default EmployeeForm;