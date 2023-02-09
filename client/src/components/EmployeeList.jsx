import React from "react";
import EmployeeData from "./EmployeeData";

export default function EmployeeList({ employees }) {
  return (
      employees.map((data) => {
        return <EmployeeData data={data} />;
      })
  );
}
