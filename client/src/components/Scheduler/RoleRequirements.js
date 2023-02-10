import { useState } from 'react';
import RoleSelector from './RoleSelector';

const RoleRequirements = ({ roles }) => {
  const [dailyRoles, setDailyRoles] = useState([[],[],[],[],[],[],[]]);
  const [newRole, setNewRole] = useState('');

  const updateRequirements = (updateIndex, newDay) => {
    const newArray = dailyRoles.map((day, index) => index === updateIndex ? newDay : day)
    setDailyRoles(newArray);
  }

  return (    
    <div className="w-full text-md flex flex-row border-2 border-gray-600 mt-4 bg-gray-200 p-1 py-3 justify-between">
      <div className="flex flex-row h-5/6">
        <input type="text" value={newRole} placeholder="New Role" onChange={(e) => setNewRole(e.target.value)} className="bg-gray-200 font-semibold border-2 border-purple-700" />
        <button className="border-2 border-black font-bold border-2 border-purple-700 align-top">+</button>
      </div>
      <div className="font-semibold align-top">Requirements</div>
      <div className="flex flex-row justify-between w-9/12 pr-3 pl-4">
        {dailyRoles.map((activeRoles, dayIndex) => <RoleSelector key={dayIndex}
                                                              dayIndex={dayIndex}
                                                              activeRoles={activeRoles}
                                                              options={roles}
                                                              updateRequirements={updateRequirements}/>)}
      </div>
    </div>
  )
}

export default RoleRequirements;