import React from "react";
import EmployeeData from "./EmployeeData";

export default function EmployeeList({ employees }) {
  return (
    <tr
      key={employees._id}
      className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
    >
      {employees.map((data) => {
        return <EmployeeData data={data} />;
      })}
    </tr>
  );
}
