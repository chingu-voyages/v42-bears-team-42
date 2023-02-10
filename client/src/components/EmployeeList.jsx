import React from "react";
import EmployeeData from "./EmployeeData";

export default function EmployeeList({
  employees,
  showEditEmployee,
  setShowEditEmployee,
  setEmployee,
}) {
  return employees.map((data) => {
    return (
      <EmployeeData
        key={data._id}
        data={data}
        showEditEmployee={showEditEmployee}
        setShowEditEmployee={setShowEditEmployee}
        setEmployee={setEmployee}
      />
    );
  });
}
