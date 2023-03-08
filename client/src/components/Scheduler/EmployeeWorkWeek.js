import WorkDay from './WorkDay';

const EmployeeWorkWeek = ({ employee, index, remove, roles, workWeek, updateWorkWeek }) => {
  return (
    <div className="w-full flex justify-between py-1">
      <div className="w-2/12 text-left px-2">{employee.fullName}</div>
      <div className="flex flex-row w-9/12 justify-between">
        {workWeek.map((activeRole, dayIndex) => <WorkDay key={dayIndex + employee.fullName}
                                                      weekIndex={index}
                                                      activeRole={activeRole}
                                                      roles={roles}
                                                      dayIndex={dayIndex}
                                                      workWeek={workWeek}
                                                      updateWorkWeek={updateWorkWeek}/>)}
      </div>
      <div className="flex flex-row w-1/12 p-1">
        <button className="w-full text-xs font-semibold border-2 border-purple-700 rounded-full bg-purple-400"
                onClick={() => remove(index)}>
                remove
        </button>
      </div>
    </div>
  )
}

export default EmployeeWorkWeek;
