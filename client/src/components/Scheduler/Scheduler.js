import { useState, useEffect } from 'react';
import Calender from "./Calender";
import Schedule from "./Schedule";
import EmployeeService from "../../utils/EmployeeService";
import ScheduleService from '../../utils/ScheduleService';

const Scheduler = () => {
  const [employees, setEmployees] = useState([]);
  const [roles, setRoles] = useState([]);

  const fetchEmployees = async () => {
    if(employees.length > 0) return;
    const response = await EmployeeService.getAll();
    console.log(response.employeeArray);
    //filter active employees and map name and id to state
    const mappedValues =
      response.employeeArray.filter(employee => employee.active)
              .map((employee) => {
                return {
                  _id: employee._id,
                  fullName: `${employee.firstName} ${employee.lastName}`
                }
              });
    console.log(mappedValues)
    setEmployees(mappedValues);
  };

  const fetchRoles = async() => {
    if(roles.length > 0) return; 
    const response = await ScheduleService.getRoles();
    const mappedValues = response.map(role => role.name);
    mappedValues.unshift('Off'); //default role
    setRoles(mappedValues);
  }

  useEffect(() => {
    fetchEmployees();
    fetchRoles();
  }, []);

  return (
    <>
      <Calender/>
      <Schedule employees={employees} roles={roles}/>
    </>
  )
}

export default Scheduler;