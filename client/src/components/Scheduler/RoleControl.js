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
    <div className={`flex flex-row w-full
                   ${roleIndex % 2 === 0 ? 'bg-white' : 'bg-purple-400'}
                   ${roleIndex === 0 ? 'rounded-t-md' : ''}
                   ${roleIndex + 1 === activeRoles.length ? 'rounded-b-md' : ''}`}>
      <div className='basis-9/12 text-left text-sm pl-1'>{role.role}</div>
      <input type="text" value={inputValue} maxLength="2" className={`w-2/12 outline-none text-black text-sm text-right text-bottom mr-1 ${roleIndex % 2 === 0 ? 'bg-white' : 'bg-purple-400'}`}
        onInput={(e) => {setRoleNumber(e.target.value)}}>
      </input>
      <div className="cursor-pointer" id={roleIndex} onClick={removeRole}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-600">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
};

export default RoleControl;