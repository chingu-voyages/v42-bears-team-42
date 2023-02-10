import WorkDay from './WorkDay';

const EmployeeWorkWeek = ({ fullName, index, remove, roles, workWeek, updateWorkWeek }) => {
  return (
    <div className="w-full flex justify-between py-1">
      <button className="border-solid border-2 border-gray-500 rounded-md ml-2 bg-gray-300 w-1/12 justify-self-center"
              onClick={() => remove(index)}>
              remove
      </button>
      <div className="w-2/12 text-left px-3">{fullName}</div>
      <div className="flex flex-row w-9/12 justify-between">
        {workWeek.map((activeRole, dayIndex) => <WorkDay key={dayIndex + fullName}
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
