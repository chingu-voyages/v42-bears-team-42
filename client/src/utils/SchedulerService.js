const authToken = sessionStorage.getItem('authToken');

const fetch = async (endpoint, method, body) => {
  const result = await fetch(`${process.env.REACT_APP_BE_URL}/${endpoint}`, {
      method: method,
      body: body,
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
      },
  });
}


// create 1 schedule
const createSchedule = async () => {

}
// get 1 schedule
// update 1 schedule
// get all schedules
// get all schedules per employee

// create 1 schedule group
// get 1 schedule group
// update 1 schedule group
// get all schedule groups

// create 1 schedule templates
// get 1 schedule templates
// update 1 schedule template
// get all schedule templates