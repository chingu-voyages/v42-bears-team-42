import { useState } from 'react';
import RoleControl from './RoleControl';
//[{role: string, number: number},{},{}]
const RoleSelector = ({ options, dayIndex, updateRequirements, activeRoles }) => {

  const addRole = (role) => {
    const newDay = activeRoles.concat({role: role, number: 1});
    updateRequirements(dayIndex, newDay);
  }

  // const removeRole = (removeIdx) => {
  //   const newDay = activeRoles.filter((role, index) => index !== parseInt(removeIdx));
  //   updateRequirements(index, newDay);
  // }

  // const setRoleNumber = (updateIndex, number) => {
  //   //const newDay = activeRoles.map((role, index) => index === updateIndex ?;

  // }

  return (
    <div className="flow flow-column overflow-hidden flex-1 mr-2">
      <div className={(activeRoles.length < 1 ? 'hidden' : 'rounded-lg border-2 border-purple-700 mb-1')}>
        { activeRoles.map((role, roleIndex) =>{
            return <RoleControl key={dayIndex + role.role}
                                role={role}
                                roleIndex={roleIndex}
                                dayIndex={dayIndex}
                                activeRoles={activeRoles}
                                updateRequirements={updateRequirements}/>
          })
        }
      </div>
      <div className="">
        <select className="w-full cursor-pointer text-sm bg-white outline-none rounded-full max-h-[28px] border-2 border-purple-700"
                onChange={(e) => addRole(e.target.value)}
                value="Add Req"
                name="roles"
                id="roles">
                <option selected disabled hidden>Add Req</option>
                {options.filter((name, index) => index !== 0 && !activeRoles.some((role) => role.role === name))
                        .map((name) => <option key={name} value={name}>{name}</option> )}
        </select>
      </div>
    </div>
  )
}

export default RoleSelector;