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
    <>
      <Header employee={employee} />
      <DashboardComponent />
    </>
  );
}
