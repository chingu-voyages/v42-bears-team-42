import { useState, useEffect } from 'react';
import Calender from "./Calender";
import Schedule from "./Schedule";
import EmployeeService from "../../utils/EmployeeService";
import ScheduleService from '../../utils/ScheduleService';

const Scheduler = () => {
  const [employees, setEmployees] = useState([]);
  const [roles, setRoles] = useState([]);
  const [startOfWeekDate, setStartOfWeekDate] = useState(null); //hoisted from calender


  const fetchEmployees = async () => {
    if(employees.length > 0) return;
    const response = await EmployeeService.getAll();
    //filter active employees and map name and id to state
    const mappedValues =
      response.employeeArray.filter(employee => employee.active)
              .map((employee) => {
                return {
                  _id: employee._id,
                  fullName: `${employee.firstName} ${employee.lastName}`
                }
              });
    setEmployees(mappedValues);
  };

  const fetchRoles = async() => {
    if(roles.length > 0) return; 
    const response = await ScheduleService.getRoles();
    const mappedValues = response.map(role => role.name);
    mappedValues.unshift('Off'); //default role
    setRoles(mappedValues);
  }

  const fetchScheduleGroups = async() => {
    const response = await ScheduleService.getScheduleGroups();
    const reqs = response.scheduleGroupsArray[0].roleRequirements;
    const schedules = response.scheduleGroupsArray[0].schedules;
    console.log(reqs, schedules);
  }

  useEffect(() => {
    fetchEmployees();
    fetchRoles();
    fetchScheduleGroups();
  }, []);

  return (
    <>
      <Calender startOfWeekDate={startOfWeekDate}
                setStartOfWeekDate={setStartOfWeekDate}/>
      <Schedule employees={employees}
                roles={roles}
                startOfWeekDate={startOfWeekDate}
                postNewSchedule={ScheduleService.postNewSchedule}/>
    </>
  )
}

export default Scheduler;