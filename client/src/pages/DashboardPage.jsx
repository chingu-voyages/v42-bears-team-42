import React, { useState } from "react";
import Header from "../components/Header";
import ManagerComponent from "../components/ManagementComponent";
import EmployeeComponent from "../components/EmployeeComponent";

export default function DashboardPage() {
  function DashboardComponent() {
    const [permissions, setPermissions] = useState(localStorage.getItem('permissions'));


    if (permissions === "manager")
      return <ManagerComponent setPermissions={setPermissions} />;
    if (permissions === "employee")
      return <EmployeeComponent setPermissions={setPermissions} />;
  }

  return (
    <>
      <Header />
      <DashboardComponent />
    </>
  );
}
