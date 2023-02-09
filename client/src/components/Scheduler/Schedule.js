import { useState } from 'react';
import EmployeeWorkWeek from './EmployeeWorkWeek';
import RoleRequirements from './RoleRequirements';

const newWorkWeek = () => ['Opener', 'Closer', 'off', 'off', 'off', 'off', 'off'];

const Schedule = ({ employees, roles }) => {

  const [activeEmployees, setActiveEmployees] = useState([]);
  const [workWeeks, setWorkWeeks] = useState([]);

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

  return (
    <>
      <div className="w-12/12 border-solid border-2 border-sky-500 text-md rounded-lg">
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
        {/* Employee Selector */}
        <div className="w-full py-1 flex justify-start">
          <div className="w-4/12">
            <select className="cursor-pointer text-md"
                        onChange={(e) => addEmployee(e.target.value)}
                        value="Add Employee"
                        name="roles"
                        id="roles">
                    <option selected disabled>Add Employee</option>
                    {employees.filter((name) => activeEmployees.indexOf(name) === -1)
                              .map((name) =>
                      <option key={name} value={name}>{name}</option> )}
            </select>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Schedule;