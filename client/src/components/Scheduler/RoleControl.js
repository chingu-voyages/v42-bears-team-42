import { useState } from 'react';

const RoleControl = ({ role, roleIndex, dayIndex, activeRoles, updateRequirements}) => {
  const [inputValue, setInputValue] = useState(0);

  // const validateInput = (value) => {
  //   setInputValue(value.replace(/[^0-9]/g,""))
  // }

  const removeRole = () => {
    const newActiveRoles = activeRoles.filter((role, index) => index !== roleIndex);
    updateRequirements(dayIndex, newActiveRoles);
  }

  const setRoleNumber = (number) => {
    number = number.replace(/[^0-9]/g,""); //only numeric chars
    setInputValue(number);
    const newActiveRoles = activeRoles.map((role, index) => {
      if (index !== roleIndex) {
        return role;
      } else {
        return {role: role.role, number: number}
      }
    });
    updateRequirements(dayIndex, newActiveRoles);
  }

  return (
    <div className="flex flex-row w-full">
      <div className='basis-9/12 text-left pl-1'>{role.role}</div>
      <input type="text" value={inputValue} maxLength="2" className="w-2/12 text-black text-sm bg-white text-right text-bottom mr-1"
        onInput={(e) => {setRoleNumber(e.target.value)}}>
      </input>
      <div className="w-1/12 text-red-500 text-sm text-bottom pr-1" id={roleIndex} onClick={removeRole}>x</div>
    </div>
  )
};

export default RoleControl;