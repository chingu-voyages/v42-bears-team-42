import Calender from "./Calender";
import Schedule from "./Schedule";
import RoleRequirements from "./RoleRequirements";

const employees = ["George Anderson", "Susan Lee", "Hector Hidalgo", "Vittorio Stanza"];
const roles = ["Off", "Opener", "Mid", "Closer"];

const Scheduler = () => {
  return (
    <>
      <Calender/>
      <Schedule employees={employees} roles={roles}/>
    </>
  )
}

export default Scheduler;