import { useState, useEffect } from 'react';
import Calender from "./Calender";
import Schedule from "./Schedule";
import EmployeeService from "../../utils/EmployeeService";
import ScheduleService from '../../utils/ScheduleService';

const Scheduler = () => {
  const [employees, setEmployees] = useState([]);
  const [roles, setRoles] = useState([]);
  const [startOfWeekDate, setStartOfWeekDate] = useState(null); //hoisted from calender
  const [schedules, setSchedules] = useState([]);

  //state for displayed schedule
  const [activeEmployees, setActiveEmployees] = useState([]);
  const [workWeeks, setWorkWeeks] = useState([]);
  const [dailyRoles, setDailyRoles] = useState([[],[],[],[],[],[],[]]);

  const clearSchedule = () => {
    setActiveEmployees([]);
    setWorkWeeks([]);
    setDailyRoles([[],[],[],[],[],[],[]]);
  }

  const setActiveSchedule = (date) => {
    if (date) {
      //console.log('date:', date.valueOf());
      const scheduleIndex = findScheduleIndex(date);
      //console.log(scheduleIndex);
      if (scheduleIndex > -1) {
        const schedule = schedules[scheduleIndex];
        const workWeekArray = schedule.schedules.map( week => week.days);
        const employeeArray = schedule.schedules.map( week => {
                                                      const first = week.employee_id.firstName;
                                                      const last = week.employee_id.lastName;
                                                      const _id = week.employee_id._id
                                                      return {fullName: `${first} ${last}` , _id: _id};
                                                    });
        const roleReqsArray = schedule.roleRequirements.map( day => day.roles );
        setWorkWeeks(workWeekArray);
        setActiveEmployees(employeeArray);
        setDailyRoles(roleReqsArray);
      } else {
        clearSchedule();
      }
    }
  };

  const findScheduleIndex = (date) => {
    if (date) {
      const millisecondsPerDay = 86400000;
      const dateWithoutTime = dateValue => Math.floor(dateValue / millisecondsPerDay); //dateValue - date in milliseconds
      let calenderDate = dateWithoutTime(date.valueOf());
      console.log('calender date', calenderDate);
      let indexMatch = -1;
      schedules.forEach((schedule, index) => {
        let scheduleDate = dateWithoutTime(schedule.start);
        console.log('scheduleDate', scheduleDate);
        if (scheduleDate  === calenderDate) indexMatch = index;
      });
      return indexMatch;
    }
    return false;
  }

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
    const data = response.scheduleGroupsArray
    setSchedules(response.scheduleGroupsArray);
    //console.log(mappedRoleReqs, response.scheduleGroupsArray);
    console.log(data);
  }

  useEffect(() => {
    fetchEmployees();
    fetchRoles();
    fetchScheduleGroups();
  }, []);

  useEffect(() => {
    setActiveSchedule(startOfWeekDate);
  },[startOfWeekDate, schedules]);

  return (
    <>
      <Calender startOfWeekDate={startOfWeekDate}
                setStartOfWeekDate={setStartOfWeekDate}
                setActiveSchedule={setActiveSchedule}/>
      <Schedule employees={employees}
                roles={roles}
                startOfWeekDate={startOfWeekDate}
                postNewSchedule={ScheduleService.postNewSchedule}
                activeEmployees={activeEmployees}
                setActiveEmployees={setActiveEmployees}
                workWeeks={workWeeks}
                setWorkWeeks={setWorkWeeks}
                dailyRoles={dailyRoles}
                setDailyRoles={setDailyRoles}
                schedules={schedules}/>
    </>
  )
}

export default Scheduler;