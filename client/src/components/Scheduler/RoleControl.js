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
    <div className="flex justify-between">
      <div className="w-5 h-5 border-solid border-2 border-red-300 text-red-300 text-sm rounded-md" id={roleIndex}
        onClick={removeRole}>
        X
      </div>
      <div>{role.role}</div>
      <input type="text" value={inputValue} maxLength="2" className="w-5 h-5 border-solid border-2 border-gray-400 text-black text-sm rounded-sm"
        onInput={(e) => {setRoleNumber(e.target.value)}}>
      </input>
    </div>
  )
};

export default RoleControl;