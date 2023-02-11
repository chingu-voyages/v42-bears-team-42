// import EmployeeService from "../utils/EmployeeService";

export default function EmployeeData({
  data,
  showEditEmployee,
  setShowEditEmployee,
  setEmployee,
}) {
  const handleRemove = async (id) => {
    // let status = !data.active;
    // const response = EmployeeService.deactivateEmployee(id, status);
  };
  return (
    <>
      <tr
        key={data._id}
        className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
      >
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          {data.firstName}
        </td>

        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
          {data.lastName}
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
            className="text-blue-400 hover:text-blue-600 pl-6"
            onClick={() => handleRemove(data._id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
}
