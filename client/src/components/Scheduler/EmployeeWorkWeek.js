import WorkDay from './WorkDay';

const EmployeeWorkWeek = ({ fullName, index, remove, roles, workWeek, updateWorkWeek }) => {
  return (
    <div className="w-full py-1 flex justify-end">
      <button className="w-1/12 border-solid border-2 border-sky-500 text-sky-500 rounded-md"
              onClick={() => remove(index)}>
              remove
      </button>
      <div className="w-2/12">{fullName}</div>
      {workWeek.map((activeRole, dayIndex) => <WorkDay key={dayIndex + fullName}
                                                    weekIndex={index}
                                                    activeRole={activeRole}
                                                    roles={roles}
                                                    dayIndex={dayIndex}
                                                    workWeek={workWeek}
                                                    updateWorkWeek={updateWorkWeek}/>)}
    </div>
  )
}

export default EmployeeWorkWeek;
