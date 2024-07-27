import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddLeave from './Features/Leave/AddLeave.jsx';
import LeaveReport from './Features/Leave/LeaveReport.jsx';
import Login from './Features/SignIn/Login.jsx';
import SalaryReport from './Features/Employee/SalaryReport.jsx';
import Error from './components/Error.jsx';
import EmployeeReport from './Features/Employee/EmployeeReport.jsx';
import Dashboard from './Features/Dashboard/Dashboard.jsx';
import FlexboxInGrid from './Features/Employee/FlexboxInGrid.jsx';
import EmployeeForm from './Features/Employee/EmployeeForm.jsx';
import EmployeeTable from './Features/Employee/EmployeeTable.jsx';
import UpdateEmployee from './Features/Employee/UpdateEmployee.jsx';
import AddEmployee from './Features/Employee/AddEmployee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement : <Error/>,
    children : [
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "/addEmployee",
        element: <AddEmployee/>,
      },
      {
        path: "/employeeReport",
        element: <EmployeeTable/>,
      },
      {
        path: "/updateEmployee/:empId",
        element: <UpdateEmployee/>,
      },
      {
        path: "/salaryReport",
        element: <SalaryReport/>,
      },
      {
        path: "/employeeReport",
        element: <EmployeeTable/>,
      },

    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/Logout",
    element: <Login/>,
  },
  {
    path: "/flexbox",
    element: <FlexboxInGrid/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
