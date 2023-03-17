import TokenService from "./TokenService";
const BASE_URL = `${process.env.REACT_APP_BE_URL}`;


const getRoles = async () => {
  const authToken = TokenService.getAuthToken();
  return fetch(`${BASE_URL}/api/Role`, {
    method: "GET",
    headers: { Authorization: `Bearer ${authToken}` },
    "Content-Type": "application/json",
  }).then((response) => {
    if (response.ok) return response.json();
    console.log(response, "error in get Roles");
  });
}

const postNewSchedule = (employeeWeeks, roleRequirements, startDate) => {
	const authToken = TokenService.getAuthToken();
  const responseIdArray = [];

	const reqListener = (event) => {
		const {_id, employee_id} = JSON.parse(event.target.response);
		console.log(_id, employee_id); 
		responseIdArray.push(_id);// these will return asyncronously, possibly out of order -
			//to be sorted in order, the responses would have to be added to responseIdArray at their original index
			//to get this index, the employee id in the response can be matched with the id in employeeWeeks

		if (responseIdArray.length === employeeWeeks.length) postScheduleGroup(startDate, responseIdArray, roleRequirements);
	}

	const postScheduleGroup = (startDate, schedules, roleRequirements) => {
		const req = new XMLHttpRequest();
		const body = JSON.stringify({start: startDate, schedules, roleRequirements});
		req.addEventListener("load", (event) => console.log(event.target.response));
		req.open("POST", `${BASE_URL}/api/ScheduleGroup`);
		req.setRequestHeader("Content-Type", "application/json");
		req.setRequestHeader("Authorization", `Bearer ${authToken}`)
		req.send(body);
	}

  //post employee weeks
	for (let i = 0; i < employeeWeeks.length; i++) {
		const req = new XMLHttpRequest();
		const body = JSON.stringify(employeeWeeks[i]);
		req.addEventListener("load", reqListener);
		req.open("POST", `${BASE_URL}/api/Schedule`);
		req.setRequestHeader("Content-Type", "application/json");
		req.setRequestHeader("Authorization", `Bearer ${authToken}`)
		req.send(body);
	}
}

const getScheduleGroups = () => {
	const authToken = TokenService.getAuthToken();
  return fetch(`${BASE_URL}/api/ScheduleGroup`, {
    method: "GET",
    headers: { Authorization: `Bearer ${authToken}` },
    "Content-Type": "application/json",
  }).then((response) => {
    if (response.ok) return response.json();
    console.log(response, "error in get ScheduleGroups");
  });
}

const ScheduleService = {
  getRoles,
	getScheduleGroups,
  postNewSchedule
};


export default ScheduleService;
