import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link, useNavigate } from "react-router-dom"



export default function MainListItems() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate('/')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>


      <ListItemButton onClick={() => navigate('/addEmployee')}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Employee" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate('/employeeReport')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Employee Report" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/updateEmployee/:empId')} >
        <ListItemIcon>
          <SummarizeIcon />
        </ListItemIcon>
        <ListItemText primary="Leave Report" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/addLeave')}  >
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Add Leaves" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/updateEmployee')} >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Salary Report" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/login')}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
}
