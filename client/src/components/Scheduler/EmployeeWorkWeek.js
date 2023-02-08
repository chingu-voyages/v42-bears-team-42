import WorkDay from './WorkDay';

const tempArr = [1,2,3,4,5,6,7];

const EmployeeWorkWeek = ({ fullName, index, remove, roles }) => {
  return (
    <div className="w-full py-1 flex justify-end">
      <button className="w-1/12 border-solid border-2 border-sky-500 text-sky-500 rounded-md"
              onClick={() => remove(index)}>
              remove
      </button>
      <div className="w-2/12">{fullName}</div>
      {tempArr.map((num) => <WorkDay key={num + fullName} roles={roles}/>)}
    </div>
  )
}

export default EmployeeWorkWeek;
