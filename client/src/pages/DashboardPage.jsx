import React from "react";
import Header from "../components/Header";
import ManagerComponent from "../components/ManagerComponent";
import EmployeeComponent from "../components/EmployeeComponent";
import EmployeeService from "../utils/EmployeeService";

export default function DashboardPage() {
  let employee = EmployeeService.getEmployeeFromStorage();

  function DashboardComponent() {
    const access = employee.permissions;

    if (access === "manager") return <ManagerComponent />;
    if (access === "employee") return <EmployeeComponent />;
  }

  return (
    <div className="h-auto w-auto">
      <div className="h-1/6">
        <Header employee={employee} />
      </div>
      <div className="h-5/6">
        <DashboardComponent />
      </div>
    </div>
  );
}
