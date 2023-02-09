export default function EmployeeData({ data }) {
  return (
    <>
    <tr key={data._id}
      className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
        {data.firstName}
      </td>
      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
        FirstName
      </span>

      <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
        {data.lastName}
      </td>
      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
        LastName
      </span>

      <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
        {data.email}
      </td>
      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
        Email
      </span>

      <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
          Permissions
        </span>
        <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">
          {data.permissions}
        </span>
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
        <a to="#" className="text-blue-400 hover:text-blue-600 underline pl-6">
          Remove
        </a>
      </td>
      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
        de-active
      </span>
      </tr>
    </>
  );
}
