import React from "react";
import Header from "../components/Header";
import ManagerComponent from "../components/ManagerComponent";
import EmployeeComponent from "../components/EmployeeComponent";

export default function DashboardPage() {
  function DashboardComponent() {
    const access = sessionStorage.getItem("employee.permissions");
    let employee = sessionStorage.getItem("employee")
    let perms = sessionStorage.getItem("employee.permissions")
    console.log('employee', employee, 'employee perms', perms)

    if (access === "manager") return <ManagerComponent />;
    if (access === "employee") return <EmployeeComponent />;
  }

  return (
    <>
      <Header />
      <DashboardComponent />
    </>
  );
}
