import { useState } from 'react';
import EmployeeWorkWeek from './EmployeeWorkWeek';
import RoleRequirements from './RoleRequirements';

const employees = ["George Anderson", "Susan Lee", "Hector Hidalgo", "Vittorio Stanza"];
const tempArray = [1,2,3,4,5,6,7];

const Schedule = ({ roles }) => {

  const [activeEmployees, setActiveEmployees] = useState([]);
  const selectEmployee = (name) => {
    setActiveEmployees(activeEmployees.concat(name))
  }
  const removeEmployee = (removeIndex) => {
    const newArray = activeEmployees.filter((employee, index) => index !== removeIndex);
    setActiveEmployees(newArray);
  }
  return (
    <>
      <div className="w-10/12 border-solid border-2 border-sky-500 text-md rounded-lg">
        {/* Employee Weeks*/}
        {activeEmployees.map((employee, index) => {
          return <EmployeeWorkWeek key={index} fullName={employee} index={index} remove={removeEmployee} roles={roles}/>
        })}
        {/* Employee Selector */}
        <div className="w-full py-1 flex justify-start">
          <div className="w-4/12">
            <select className="cursor-pointer text-md"
                        onChange={(e) => selectEmployee(e.target.value)}
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
      {/* Role Requirements*/}
      <div className="w-10/12 text-md">
        <div className="w-full py-1 flex justify-end">
            {tempArray.map((num) => <RoleRequirements key={num} roles={roles}/>)}
        </div>
      </div>
    </>
  )
}

export default Schedule;