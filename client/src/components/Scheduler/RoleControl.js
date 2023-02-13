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
    <div className="flex flex-row">
      <div className='px-1 w-5/6 text-left'>{role.role}</div>
      <input type="text" value={inputValue} maxLength="2" className="w-5 border-solid border-2 border-gray-400 text-black text-sm rounded-sm bg-gray-200 text-right"
        onInput={(e) => {setRoleNumber(e.target.value)}}>
      </input>
      <div className="text-red-500 text-sm ml-1" id={roleIndex} onClick={removeRole}>x</div>
    </div>
  )
};

export default RoleControl;