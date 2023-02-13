import { useState } from 'react';
import EmployeeWorkWeek from './EmployeeWorkWeek';
import RoleRequirements from './RoleRequirements';

const newWorkWeek = () => ['Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off'];

const Schedule = ({ employees, roles }) => {

  const [activeEmployees, setActiveEmployees] = useState([]);
  const [workWeeks, setWorkWeeks] = useState([]);

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

  return (
    <>
      <div className="w-12/12 border-solid border-2 border-purple-700 text-md rounded-lg">
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
        {/* Employee Selector */}
        <div className="w-full py-1 pl-1 flex justify-start">
          <div className="text-sm pl-1">
            <select className="cursor-pointer text-md bg-gray-200"
                        onChange={(e) => addEmployee({fullName:e.target.value, _id: e.target.key})}
                        value="Add Employee"
                        name="employees"
                        id="employees">
                    <option selected disabled>Add Employee</option>
                    {employees.filter((employee) => !activeEmployees.some(test => test.fullName === employee.fullName))
                              .map((employee) =>
                      <option key={employee._id} value={employee.fullName}>{employee.fullName}</option> )}
            </select>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Schedule;