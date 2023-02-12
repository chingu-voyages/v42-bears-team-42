import React, { useState } from "react";

export default function EmployeeAdd({ getEmployees }) {
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    permissions: "",
  });

  const handleCreateEmployee = async (e) => {
    e.preventDefault();

    // validation(?)
    if (
      !newEmployee.firstName ||
      !newEmployee.lastName ||
      !newEmployee.email ||
      !newEmployee.password ||
      !newEmployee.permissions
    ) {
      alert("All fields required.");
      return;
    }

    const authToken = sessionStorage.authToken;
    return await fetch(`${process.env.REACT_APP_BE_URL}/api/employee/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        email: newEmployee.email,
        password: newEmployee.password,
        permissions: newEmployee.permissions,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          console.log("Status:", data.status, data.message);
          getEmployees();
        } else {
          console.log(data.message);
        }
      });
  };

  return (
    <div className="py-3">
      <div className="flex flex-col px-2">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden  rounded-lg">
              <div className="text-gray-400 text-center"></div>
              <div className="border-collapse">
                <form onSubmit={handleCreateEmployee}>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      {/* table title */}
                      <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          First name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Last Name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Email
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Password
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Permission
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                        {/* First Name */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold ">
                            First Name
                          </span>
                          <input
                            type="text"
                            onChange={(e) =>
                              setNewEmployee({
                                ...newEmployee,
                                firstName: e.target.value,
                              })
                            }
                            className="border rounded p-2.5"
                            placeholder="First name"
                          />
                        </td>

                        {/* Last Name */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold ">
                            Last Name
                          </span>
                          <input
                            type="text"
                            onChange={(e) =>
                              setNewEmployee({
                                ...newEmployee,
                                lastName: e.target.value,
                              })
                            }
                            className="border rounded p-2.5"
                            placeholder="Last name"
                          />
                        </td>

                        {/* Email */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                            Email
                          </span>
                          <div className="relative w-full lg:max-w-sm">
                            <input
                              type="email"
                              onChange={(e) =>
                                setNewEmployee({
                                  ...newEmployee,
                                  email: e.target.value,
                                })
                              }
                              className="border rounded p-2.5"
                              placeholder="company@email.com"
                            />
                          </div>
                        </td>

                        {/* Password */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                            Password
                          </span>
                          <div className="relative w-full lg:max-w-sm">
                            <input
                              type="password"
                              onChange={(e) =>
                                setNewEmployee({
                                  ...newEmployee,
                                  password: e.target.value,
                                })
                              }
                              className="border rounded p-2.5"
                              placeholder="Temporary password"
                            />
                          </div>
                        </td>

                        {/* Permission */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                          <div className="relative lg:max-w-sm">
                            <select
                              onChange={(e) =>
                                setNewEmployee({
                                  ...newEmployee,
                                  permissions: e.target.value,
                                })
                              }
                              className="lg:w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            >
                              <option value="" selected disabled>
                                Set permission
                              </option>
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="lg:py-5 py-0 px-1">
                    <button
                      type="submit"
                      value="Submit"
                      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Add Employee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
