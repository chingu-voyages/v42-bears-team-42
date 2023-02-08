import Calender from "./Calender";
import Schedule from "./Schedule";
import RoleRequirements from "./RoleRequirements";

const roles = ["Off", "Opener", "Mid", "Closer"];

const Scheduler = () => {
  return (
    <>
      <Calender/>
      <Schedule roles={roles}/>
      <RoleRequirements roles={roles}/>
    </>
  )
}

export default Scheduler;