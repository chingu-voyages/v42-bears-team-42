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
    <div className="w-full text-md flex flex-col border-2 border-purple-700 mt-4 bg-white rounded-lg">
      <div className="text-center text-white w-full font-semibold p-1 bg-black rounded-t-md py-1">Requirements</div>
      <div className="flex flex-row w-full">
        <div className="flex flex-row flex-initial m-1 w-3/12 h-5/6">
          <input type="text" value={newRole} placeholder="New Role" onChange={(e) => setNewRole(e.target.value)} className="flex flex-initial bg-white placeholder:pl-1 border-2 border-purple-700 border-r-0" />
          <button className="flex flex-initial font-bold border-2 border-purple-700 align-top p-1">+</button>
        </div>
        <div className="flex w-9/12 mt-2">
          {dailyRoles.map((activeRoles, dayIndex) => <RoleSelector key={dayIndex}
                                                                dayIndex={dayIndex}
                                                                activeRoles={activeRoles}
                                                                options={roles}
                                                                updateRequirements={updateRequirements}/>)}
        </div>
      </div>
    </div>
  )
}

export default RoleRequirements;