import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import UpdateIcon from '@mui/icons-material/Update';
import { useState, useEffect, useCallback } from 'react';

import axios from "axios"
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Skeleton, Snackbar, Stack, Tooltip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SnackbarBox from '../../components/SnackbarBox';


const rows = [
    { empId: 1, lastName: 'Snow', firstName: 'Jon', email: "abc@gmail.com", status: "Active", },
    { empId: 2, lastName: 'Lannister', firstName: 'Cersei', email: "abc@gmail.com", status: "Active" },
    { empId: 3, lastName: 'Lannister', firstName: 'Jaime', email: "abc@gmail.com", status: "Active" },
    { empId: 4, lastName: 'Stark', firstName: 'Arya', email: "abc@gmail.com", status: "Active" },
    { empId: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: "abc@gmail.com", status: "Active" },
    { empId: 6, lastName: 'Melisandre', firstName: null, email: "abc@gmail.com", status: "Active" },
    { empId: 7, lastName: 'Clifford', firstName: 'Ferrara', email: "abc@gmail.com", status: "Active" },
    { empId: 8, lastName: 'Frances', firstName: 'Rossini', email: "abc@gmail.com", status: "Active" },
    { empId: 9, lastName: 'Roxie', firstName: 'Harvey', email: "abc@gmail.com", status: "Active" },
    { empId: 9, lastName: 'Roxie', firstName: 'Harvey', email: "abc@gmail.com", status: "Active" },

];

export default function EmployeeTable() {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [deleteId, setDeleteId] = useState(null)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true);

    const [deleteMessage, setDeleteMessage] = useState(null)

    const isXs = useMediaQuery(theme.breakpoints.only('xs'))
    const isSm = useMediaQuery(theme.breakpoints.only('sm'))

    const [openSnackbar, setOpenSnackbar] = useState(false);


    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };



    const handleClickOpen = (Id) => {
        setDeleteId(Id)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        deleteUser(deleteId)
        setOpen(false);
        setOpenSnackbar(true)
    };




    const columns = [
        { field: 'empId', headerName: 'Employee ID', width: 130 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        !isXs && !isSm && { field: 'gender', headerName: 'gender', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        !isXs && !isSm && { field: 'dept', headerName: 'Department', width: 130 },
        !isXs && !isSm && { field: 'designation', headerName: 'Designation', width: 130 },
        !isXs && !isSm && { field: 'workType', headerName: 'Work Type', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'actions', headerName: 'Actions', width: 200,
            renderCell: (params) => (
                <Stack direction={'rows'} alignItems={'center'} gap={2}>
                    {/* View */}
                    <Tooltip title="View">
                        <IconButton color='info'>
                            <PreviewIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Update" >
                        <IconButton color='warning' onClick={() => navigate(`/updateEmployee/${params.row.empId}`)}>
                            <UpdateIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton color='error' onClick={() => handleClickOpen(params.row.empId)}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>


                    {/* Delete */}



                </Stack>
            )
        },


    ].filter(Boolean);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const deleteUser = useCallback(async (id) => {
        try {
            console.log("delete emp Id", id)
            const response = await axios.delete(`http://localhost:8080/api/employee/${id}`);
            setDeleteMessage(response.data.message)
            // Once user is deleted, you may want to refetch the updated user list
            fetchUsers();
        } catch (error) {
            
            console.log('Error deleting user:', error);
        }
    });


    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/employee",

            );
            //console.log(response?.data?.result)
            const sampleEmployees = response.data.result.map((employee) => ({
                empId: employee.empId,
                lastName: employee.lastName,
                firstName: employee.firstName,
                gender: employee.gender,
                email: employee.email,
                dept: employee.department.deptName,
                designation: employee.designation,
                workType: employee.workType,
                status: employee.status

            }))
            setEmployees(sampleEmployees)
            //(response.data?.result)
            setLoading(false);
        } catch (error) {
            console.log("Error fetching users data:", error);
        }
    };

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        // display={{ xs: 'block', md: 'flex' }} minHeight={'100vh'} justifyContent={{ xs: 'center' }} alignItems={{ xs: 'center' }}
        <Box height={"100vh"} >
            <Grid container >
                <Grid item xs={12} md={12}>
                    {
                        loading ? (
                            <Box sx={{ width: '100%' }}>
                                <Skeleton variant="rectangular" width="100%" height={400} animation="wave" />
                            </Box>
                        ) : (
                            <>
                                <DataGrid
                                    rows={employees}
                                    getRowId={(row) => row.empId}
                                    columns={columns}
                                    disableRowSelectionOnClick
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                    autoHeight
                                />
                                <Dialog
                                    fullScreen={fullScreen}
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                >
                                    <DialogTitle id="responsive-dialog-title">
                                        {"Delete Employee?"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            {
                                                `Are you going to delete employee ${deleteId ? `with ${deleteId}` : ""}`
                                            }
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button onClick={handleDelete} autoFocus>
                                            Delete
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                                {/* <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                                    <Alert
                                        onClose={handleSnackbarClose}
                                        severity="error"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        Employee Deleted Successfully
                                    </Alert>
                                </Snackbar> */}

                                <SnackbarBox
                                    openSnackbar={openSnackbar}
                                    handleSnackbarClose={handleSnackbarClose}
                                    message={deleteMessage}
                                    severity={"success"}
                                />
                            </>
                        )
                    }



                </Grid>

            </Grid>
        </Box>


    );
}
