import { useState } from 'react';
import EmployeeWorkWeek from './EmployeeWorkWeek';
import RoleSelector from './RoleSelector';

const newWorkWeek = () => ['Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off'];

const Schedule = ({ employees, roles }) => {
  const [activeEmployees, setActiveEmployees] = useState([]);
  const [workWeeks, setWorkWeeks] = useState([]);
  const [newRole, setNewRole] = useState('');
  const [dailyRoles, setDailyRoles] = useState([[],[],[],[],[],[],[]]);

  const addEmployee = (employee) => {
    console.log(employee)
    setActiveEmployees(activeEmployees.concat(employee));
    //create new employee work week
    const newArray = workWeeks.slice();
    newArray.push(newWorkWeek());
    setWorkWeeks(newArray);
  }

  const removeEmployee = (removeIndex) => {
    const newEmployeesArray = activeEmployees.filter((employee, index) => index !== removeIndex);
    setActiveEmployees(newEmployeesArray);
    //console.log('old:', workWeeks)
    const newWorkWeekArray = workWeeks.filter((workWeek, index) => index !== removeIndex);
    //console.log('new:', newWorkWeekArray);
    setWorkWeeks(newWorkWeekArray);
  }

  const updateWorkWeek = (newWeekIndex, newWeek) => {
    const newWeeksArray = workWeeks.map( (week, index) => index === newWeekIndex ? newWeek : week);
    setWorkWeeks(newWeeksArray);
  }

  const updateRequirements = (updateIndex, newDay) => {
    const newArray = dailyRoles.map((day, index) => index === updateIndex ? newDay : day)
    setDailyRoles(newArray);
  }

  return (
    <>
      <div className="w-full border-solid border-2 border-t-0 border-purple-700 text-md rounded-b-lg bg-white">
        {/* Employee Weeks*/}
        {activeEmployees.map((employee, index) => {
          return <EmployeeWorkWeek  key={index}
                                    employee={employee}
                                    index={index}
                                    workWeek={workWeeks[index]}
                                    roles={roles}
                                    remove={removeEmployee}
                                    updateWorkWeek={updateWorkWeek}/>
        })}
        <div className="flex flex-row w-full rounded-b-md py-2 bg-black">
          <div className="flex flex-row basis-2/12 pr-1">
            {/* Employee Selector */}
            <select className="w-full pl-1 flex flex-initial cursor-pointer min-h-0 max-h-[28px] ml-1 text-sm rounded-full border-2 border-purple-700 outline-none"
                        onChange={(e) => addEmployee({fullName:e.target.value, _id: e.target.key})}
                        value="Add Employee"
                        name="employees"
                        id="employees">
                    <option disabled hidden>Add Employee</option>
                    {employees.filter((employee) => !activeEmployees.some(test => test.fullName === employee.fullName))
                              .map((employee) =>
                      <option key={employee._id} value={employee.fullName}>{employee.fullName}</option> )}
            </select>
          </div>
          {/* Requirements Setters */}
          <div className="flex basis-9/12 min-h-0 min-w-0 justify-between">
            {dailyRoles.map((activeRoles, dayIndex) => <RoleSelector key={dayIndex}
                                                                  dayIndex={dayIndex}
                                                                  activeRoles={activeRoles}
                                                                  options={roles}
                                                                  updateRequirements={updateRequirements}/>)}
          </div>
          {/* New Role Field */}
          {/* <div className="bg-white flex text-sm text-left rounded-full border-2 border-purple-700 max-h-[28px] max-w-[20px]">
            <input type="text" value={newRole} placeholder="New Role" onChange={(e) => setNewRole(e.target.value)}  className="w-[140px] max-h-[28px] outline-0 border-none rounded-full pl-1 placeholder:text-black" />
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-purple-700">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

/*
calendar outline
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

calendar solid
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
</svg>

mini plus document solid
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z" clipRule="evenodd" />
</svg>

mini plus circle solid
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
</svg>

mini x circle solid
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
</svg>

x circle solid
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
</svg>

x circle outline
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

*/

export default Schedule;