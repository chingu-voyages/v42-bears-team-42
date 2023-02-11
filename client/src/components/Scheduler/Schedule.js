import { useState } from 'react';
import EmployeeWorkWeek from './EmployeeWorkWeek';
import RoleSelector from './RoleSelector';

const newWorkWeek = () => ['Opener', 'Closer', 'off', 'off', 'off', 'off', 'off'];

const Schedule = ({ employees, roles }) => {
  const [activeEmployees, setActiveEmployees] = useState([]);
  const [workWeeks, setWorkWeeks] = useState([]);
  const [newRole, setNewRole] = useState('');
  const [dailyRoles, setDailyRoles] = useState([[],[],[],[],[],[],[]]);

  const addEmployee = (name) => {
    setActiveEmployees(activeEmployees.concat(name));
    console.log(Array.isArray(workWeeks))
    const newArray = workWeeks.slice();
    console.log(newArray);
    newArray.push(newWorkWeek());
    setWorkWeeks(newArray);
  }

  const removeEmployee = (removeIndex) => {
    const newEmployeesArray = activeEmployees.filter((employee, index) => index !== removeIndex);
    setActiveEmployees(newEmployeesArray);
    console.log('old:', workWeeks)
    const newWorkWeekArray = workWeeks.filter((workWeek, index) => index !== removeIndex);
    console.log('new:', newWorkWeekArray);
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
      <div className="w-12/12 border-solid border-2 border-t-0 border-purple-700 text-md rounded-b-lg bg-white">
        {/* Employee Weeks*/}
        {activeEmployees.map((employee, index) => {
          return <EmployeeWorkWeek  key={index}
                                    fullName={employee}
                                    index={index}
                                    workWeek={workWeeks[index]}
                                    roles={roles}
                                    remove={removeEmployee}
                                    updateWorkWeek={updateWorkWeek}/>
        })}
        <div className="flex flex-row w-full justify-between rounded-b-md py-1 bg-black">
          {/* Employee Selector */}
          <select className="self-start cursor-pointer text-sm bg-white rounded-full basis-1/12 border-2 border-purple-700 box-border mb-1"
                      onChange={(e) => addEmployee(e.target.value)}
                      value="Add Employee"
                      name="roles"
                      id="roles">
                  <option selected disabled>Add Employee</option>
                  {employees.filter((name) => activeEmployees.indexOf(name) === -1)
                            .map((name) =>
                    <option key={name} value={name}>{name}</option> )}
          </select>
          {/* New Role Field */}
          <div className="min-h-0 min-w-0 self-start flex flex-row rounded-full bg-white border-2 border-purple-700 basis-1/12 box-border">
            <input type="text" value={newRole} placeholder="New Role" onChange={(e) => setNewRole(e.target.value)} className="min-h-0 min-w-0 flex text-sm bg-white placeholder:pl-1 rounded-full box-border" />
            {/* <button className="font-bold text-sm rounded-full w-6 align-top">+</button> */}
          </div>
          {/* Requirements Setters */}
          <div className="flex basis-9/12 self-start mt-1">
            {dailyRoles.map((activeRoles, dayIndex) => <RoleSelector key={dayIndex}
                                                                  dayIndex={dayIndex}
                                                                  activeRoles={activeRoles}
                                                                  options={roles}
                                                                  updateRequirements={updateRequirements}/>)}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Schedule;