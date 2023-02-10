import React, { useState, useEffect } from "react";
import EmployeeService from "../utils/EmployeeService";
import EmployeeList from "./EmployeeList";
import EmployeeAdd from "./EmployeeAdd";
import EditEmployee from "./modals/EditEmployee";

export default function EmployeeManageComponent() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState();
  const [showEditEmployee, setShowEditEmployee] = useState(false);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await EmployeeService.getAll();

    const active = response.employeeArray.filter(
      (employee) => employee.active === true
    );
    const notActive = response.employeeArray.filter(
      (employee) => employee.active === false
    );

    setEmployees(response.employeeArray);
  };

  return (
    <div>
      {/* Add an employee */}
      <EmployeeAdd getEmployees={getEmployees} />

      {/* Employee table */}
      <div className="flex flex-col px-2 h-screen w-screen">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden  rounded-lg">
              <div className="border-collapse">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    {/* Table header */}
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
                        Update
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
                      />
                    )}
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
