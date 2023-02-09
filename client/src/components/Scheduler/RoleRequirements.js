import { useState } from 'react';
import RoleSelector from './RoleSelector';

const RoleRequirements = ({ roles }) => {
  const [dailyRoles, setDailyRoles] = useState([[],[],[],[],[],[],[]]);

  const updateRequirements = (updateIndex, newDay) => {
    const newArray = dailyRoles.map((day, index) => index === updateIndex ? newDay : day)
    setDailyRoles(newArray);
  }

  return (    
    <div className="w-12/12 text-md">
        <div className="w-full py-1 flex justify-end">
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