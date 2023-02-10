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

const ScheduleService = {
  getRoles,
};


export default ScheduleService;
