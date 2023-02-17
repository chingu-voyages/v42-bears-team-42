import React, { useState, useEffect } from "react";
import EmployeeService from "../utils/EmployeeService";
import EmployeeList from "./EmployeeList";
import EmployeeAdd from "./EmployeeAdd";
import EditEmployee from "./modals/EditEmployee";

export default function EmployeeManageComponent() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState();
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const [showInactiveEmployees, setShowInactiveEmployees] = useState(false);

  useEffect(() => {
    getEmployees();
  }, [employees]);

  const getEmployees = async () => {
    const response = await EmployeeService.getAll();
    if (!showInactiveEmployees) {
      const active = await response.employeeArray.filter(
        (employee) => employee.active === true
      );
      setEmployees(active);
    } else {
      setEmployees(response.employeeArray);
    }
  };

  return (
    <>
      <div className="">
        {/* Add an employee */}
        <EmployeeAdd getEmployees={getEmployees} />
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              onClick={() => {
                setShowInactiveEmployees(!showInactiveEmployees);
                getEmployees();
              }}
            ></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
              Show Inactive Employees
            </span>
          </label>
        </div>
        {/* Employee table */}
        <div className="flex flex-col min-h-full">
          <div className="overflow-x-auto">
            <div className="w-2/3 inline-block align-middle">
              <div className="overflow-hidden">
                <div className="border-collapse">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="sticky top-0">
                      {/* Table header */}
                      <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-purple-700 hidden lg:table-cell">
                          Name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-purple-700 hidden lg:table-cell">
                          Email
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-purple-700 hidden lg:table-cell">
                          Permissions
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-purple-700 hidden lg:table-cell">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table body */}
                      {!employees ? (
                        ""
                      ) : (
                        <EmployeeList
                          employees={employees}
                          showEditEmployee={showEditEmployee}
                          setShowEditEmployee={setShowEditEmployee}
                          setEmployee={setEmployee}
                          getEmployees={getEmployees}
                        />
                      )}
                    </tbody>
                  </table>
                  {/* Edit employee modal */}
                  {!showEditEmployee ? (
                    ""
                  ) : (
                    <EditEmployee
                      getEmployees={getEmployees}
                      employee={employee}
                      onClose={() => {
                        setShowEditEmployee(false);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
