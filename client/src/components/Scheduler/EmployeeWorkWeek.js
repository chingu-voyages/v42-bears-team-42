import WorkDay from './WorkDay';

const EmployeeWorkWeek = ({ employee, index, remove, roles, workWeek, updateWorkWeek }) => {
  return (
    <div className="w-full flex justify-between py-1">
      <button className="text-xs font-semibold border-2 border-purple-700 rounded-full ml-1 bg-white py-0 px-4 -mr-3"
              onClick={() => remove(index)}>
              remove
      </button>
      <div className="w-2/12 text-left px-3">{employee.fullName}</div>
      <div className="flex flex-row w-9/12 justify-between">
        {workWeek.map((activeRole, dayIndex) => <WorkDay key={dayIndex + employee.fullName}
                                                      weekIndex={index}
                                                      activeRole={activeRole}
                                                      roles={roles}
                                                      dayIndex={dayIndex}
                                                      workWeek={workWeek}
                                                      updateWorkWeek={updateWorkWeek}/>)}
      </div>
    </div>
  )
}

export default EmployeeWorkWeek;
