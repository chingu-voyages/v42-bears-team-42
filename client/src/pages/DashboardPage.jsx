import React, { useState } from "react";
import Header from "../components/Header";
import ManagementComponent from "../components/ManagementComponent";
import EmployeeComponent from "../components/EmployeeComponent";

export default function DashboardPage() {
  function DashboardComponent() {
    const [permissions, setPermissions] = useState("manager");

    if (permissions === "manager")
      return <ManagementComponent setPermissions={setPermissions} />;
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
