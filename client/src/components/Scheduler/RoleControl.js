import { useState } from 'react';

const RoleControl = ({ role, roleIndex, dayIndex, activeRoles, updateRequirements, workWeeks}) => {
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
        return {name: role.name, number: number}
      }
    });
    updateRequirements(dayIndex, newActiveRoles);
  }

  const isHighlighted = (name, number, dayIndex) => {
    console.log("name:" + name, "number:" + number, "index:" + dayIndex);
    let roleCount = {};
    for (let person = 0; person < workWeeks.length; person++) {
      const role = workWeeks[person][dayIndex];
      console.log("role " + role);
      if (Object.hasOwn(roleCount, role)) {
        console.log("add 1 " + role);
        roleCount[role] += 1;
      } else {
        console.log("add new " + role);
        roleCount[role] = 1;
      }
    }
    for (const role in roleCount) {
      console.log(`${role}: ${roleCount[role]}`);
    }

    if (number > 0) {
      if (roleCount[name] && roleCount[name] < number) {
        console.log(name + " too few")
        return " text-red-700"
      } else if (!roleCount[name]){
        console.log(name + " not found")
        return " text-red-700"
      } else {
        return "";
      }
    }
  }

  return (
    <div className={`flex flex-row w-full bg-white
                   ${roleIndex === 0 ? 'rounded-t-md' : ''}
                   ${roleIndex + 1 === activeRoles.length ? 'rounded-b-md' : ''}`}>
      <div className={'basis-9/12 text-left text-sm pl-1' + isHighlighted(role.name, role.number, dayIndex)}>{role.name}</div>
      <input type="text" value={inputValue} maxLength="2" className={`w-2/12 outline-none text-black text-sm text-right text-bottom mr-1 bg-white`}
        onInput={(e) => {setRoleNumber(e.target.value)}}>
      </input>
      <div className="cursor-pointer" id={roleIndex} onClick={removeRole}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-purple-700">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
};

export default RoleControl;