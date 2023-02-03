import React from "react";
import Header from "../components/Header";
import ManagerComponent from "../components/ManagerComponent";
import EmployeeComponent from "../components/EmployeeComponent";

export default function DashboardPage() {
  const employee = JSON.parse(sessionStorage.getItem("employee"));
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
