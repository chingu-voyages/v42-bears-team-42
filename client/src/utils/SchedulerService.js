import samFetch from "./samFetch"

// create 1 schedule
const createSchedule = async () => {

}
// get 1 schedule
// update 1 schedule
// get all schedules
export const getAllSchedules = async () => {
  console.log('sched serv get all start')
  const result = await samFetch('api/Schedule', 'GET');
  console.log('sched serv result', result);
  return result;
}

// get all schedules per employee

// create 1 schedule group
// get 1 schedule group
// update 1 schedule group
// get all schedule groups

// create 1 schedule templates
// get 1 schedule templates
// update 1 schedule template
// get all schedule templates
