import { useState } from 'react';

const RoleRequirements = ({ roles }) => {
  const [activeRoles, setActiveRoles] = useState([]);
  const [inputValue, setInputValue] = useState(0);

  const selectRole = (role) => {
    setActiveRoles(activeRoles.concat(role));
  }

  const removeRole = (removeIdx) => {
    const newArray = activeRoles.filter((role, index) => index !== parseInt(removeIdx));
    setActiveRoles(newArray);
  }

  const validateInput = (value) => {
    //value.replace(/[^0-9]/g,"");
    setInputValue(value.replace(/[^0-9]/g,""))
  }

  return (
    <div className="w-1/12 mx-4 overflow-hidden">
      { activeRoles.map((role, index) =>{
          return <div className="flex justify-between">
            <div className="w-5 h-5 border-solid border-2 border-red-300 text-red-300 text-sm rounded-md" id={index}
              onClick={(e) => {removeRole(e.target.id)}}>
              X
            </div>
            <div>{role}</div>
            <input type="text" value={inputValue} maxlength="2" className="w-5 h-5 border-solid border-2 border-gray-400 text-black text-sm rounded-sm"
              onInput={(e) => {validateInput(e.target.value)}}>
            </input>
          </div>
        })
      }
      <select className="cursor-pointer text-md"
                  onChange={(e) => selectRole(e.target.value)}
                  value="Add Role"
                  name="roles"
                  id="roles">
              <option selected disabled>Add Role</option>
              {roles.filter((name, index) => index !== 0 && activeRoles.indexOf(name) === -1)
                        .map((name) =>
                <option key={name} value={name}>{name}</option> )}
      </select>
    </div>
  )
}

export default RoleRequirements;