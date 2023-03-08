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
        <td className="w-full lg:w-auto p-1 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          {data.firstName} {data.lastName}
        </td>

        <td className="w-full lg:w-auto p-1 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
          {data.email}
        </td>

        <td className="w-full lg:w-auto p-1 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
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
        <td className="w-full lg:w-auto p-1 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
          <button
            className="text-blue-400 hover:text-blue-600 pl-6"
            onClick={() => {
              setEmployee(data);
              setShowEditEmployee(!showEditEmployee);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button
            className={
              data.active
                ? "text-red-400 hover:text-red-600 pl-6"
                : "text-green-400 hover:text-green-600 pl-6"
            }
            onClick={() => handleChangeStatus(data._id)}
          >
            {data.active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </button>
        </td>
      </tr>
    </>
  );
}
