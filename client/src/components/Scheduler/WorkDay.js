import { useState } from 'react';

const WorkDay = ({ roles, activeRole, dayIndex, weekIndex, workWeek, updateWorkWeek }) => {
  const [selection, setSelection] = useState(activeRole);

  const selectRole = (role) => {
    setSelection(role);
    const newWorkWeek = workWeek.map((day, index) => index === dayIndex ? role : day)
    updateWorkWeek(weekIndex, newWorkWeek);
  }

  return (
    <div className="border-box border-solid border-2 border-purple-400 flex-1 m-1 overflow-hidden">
      <select className="cursor-pointer text-sm bg-white outline-none w-full"
                    onChange={(e) => selectRole(e.target.value)}
                    value={selection}
                    name="roles"
                    id="roles">
                {roles.map((role) =>
                  <option key={role} value={role}>{role}</option> )}
      </select>
    </div>
  )
}

export default WorkDay;