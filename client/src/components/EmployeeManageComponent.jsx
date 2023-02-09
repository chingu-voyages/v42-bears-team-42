import React, { useState, useEffect } from "react";
import EmployeeService from "../utils/EmployeeService";
import EmployeeList from "./EmployeeList";

export default function EmployeeManageComponent() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await EmployeeService.getAll();
    setEmployees(response.employeeArray);
  };

  return (
    <div>
      {/* table for show and manage all employee */}
      <div className="flex flex-col px-2 h-screen w-screen">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden  rounded-lg">
              <div className="border-collapse py-16">
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
                        Permissions
                      </th>
                      <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                        Deactivate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* table body */}
                    {!employees ? "" : <EmployeeList employees={employees} />}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second table for adding a new employee */}
      <div className="py-3">
        <div className="flex flex-col px-2">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden  rounded-lg">
                <div className="border-collapse py-16">
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
                          Permission
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          de-active
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* loop */}
                      {/* table body */}
                      <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                        {/* First Name */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold ">
                            FirstName
                          </span>
                          <input
                            className="border rounded p-2.5"
                            placeholder="Test Name"
                          />
                        </td>

                        {/* Last Name */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold ">
                            LastName
                          </span>
                          <input
                            className="border rounded p-2.5"
                            placeholder="Test Name"
                          />
                        </td>

                        {/* Email */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                            Email
                          </span>
                          <div className="relative w-full lg:max-w-sm">
                            <input
                              className="border rounded p-2.5"
                              placeholder="Test Name"
                            />
                          </div>
                        </td>

                        {/* Permission */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                            Permissions
                          </span>
                          <div className="relative lg:max-w-sm">
                            <select className="lg:w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                              <option>Manager</option>
                              <option>Employee</option>
                            </select>
                          </div>
                        </td>

                        {/* de-active */}
                        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                            de-active
                          </span>
                          <input
                            className="border rounded p-2.5"
                            placeholder="Test Name"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="lg:py-5 py-0 px-1">
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      New add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
