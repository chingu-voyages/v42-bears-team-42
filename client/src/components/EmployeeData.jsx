import EmployeeService from "../utils/EmployeeService";

export default function EmployeeData({
  data,
  showEditEmployee,
  setShowEditEmployee,
  setEmployee,
  getEmployees,
}) {
  const handleChangeStatus = async (id) => {
    let active = data.active;
    const response = await EmployeeService.changeEmployeeStatus(id, !active);
    console.log(response);
    await getEmployees();
  };
  return (
    <>
      <tr
        key={data._id}
        className={
          data.active
            ? "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
            : "bg-gray-100 lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
        }
      >
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          {data.firstName} {data.lastName}
        </td>

        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
          {data.email}
        </td>

        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
          <span
            className={
              data.permissions === "manager"
                ? "rounded bg-purple-300 py-1 px-3 text-xs font-bold"
                : "rounded bg-gray-300 py-1 px-3 text-xs font-bold"
            }
          >
            {data.permissions}
          </span>
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
          <button
            className="text-blue-400 hover:text-blue-600 pl-6"
            onClick={() => {
              setEmployee(data);
              setShowEditEmployee(!showEditEmployee);
            }}
          >
            Edit
          </button>
          <button
            className={
              data.active
                ? "text-red-400 hover:text-blue-600 pl-6"
                : "text-blue-400 hover:text-blue-600 pl-6"
            }
            onClick={() => handleChangeStatus(data._id)}
          >
            {data.active ? "Disable" : "Enable"}
          </button>
        </td>
      </tr>
    </>
  );
}
