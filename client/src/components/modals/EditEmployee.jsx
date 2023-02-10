import { useState } from "react";
import EmployeeService from "../../utils/EmployeeService";

export default function EditEmployee({ onClose, employee, getEmployees }) {
  const [selectedEmployee, setSelectedEmployee] = useState({
    id: employee._id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    permissions: employee.permissions,
  });

  const handleOnChange = (employeeKey, value) =>
    setSelectedEmployee({ ...selectedEmployee, [employeeKey]: value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await EmployeeService.editEmployee(
      selectedEmployee.id,
      selectedEmployee.firstName,
      selectedEmployee.lastName,
      selectedEmployee.email,
      selectedEmployee.permissions
    );

    if (response.success) {
      getEmployees();
      onClose();
    } else {
      console.log(response);
    }
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        onClick={handleClose}
        id="wrapper"
      >
        <div className="w-[500px] flex flex-col">
          <button
            className="text-gray-900 text-sm place-self-end"
            onClick={() => {
              onClose();
            }}
          >
            Close
          </button>

          <div className="bg-white p-2 rounded">
            <div className="py-6 px-6 lg:px-8 text-left">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Edit Employee
              </h3>
              <form className="space-y-6" action="#" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-purple-800 block w-full p-2.5"
                    onChange={(e) =>
                      handleOnChange("firstName", e.target.value)
                    }
                    value={selectedEmployee.firstName}
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-purple-800 block w-full p-2.5"
                    onChange={(e) => handleOnChange("lastName", e.target.value)}
                    value={selectedEmployee.lastName}
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-purple-800 block w-full p-2.5"
                    onChange={(e) => handleOnChange("email", e.target.value)}
                    value={selectedEmployee.email}
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="permissions"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Permissions
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-900 py-3 px-4 pr-8 text-sm rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-800"
                      defaultValue={selectedEmployee.permissions}
                      name="permissions"
                      onChange={(e) =>
                        handleOnChange("permissions", e.target.value)
                      }
                    >
                      <option value="manager">Manager</option>
                      <option value="employee">Employee</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purple-700 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
