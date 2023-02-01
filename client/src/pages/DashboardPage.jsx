import React from "react";
import Header from "../components/Header";
import ManagerComponent from "../components/ManagerComponent";
import EmployeeComponent from "../components/EmployeeComponent";

export default function DashboardPage() {
  function DashboardComponent() {
    const access = localStorage.getItem("permissions");

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
