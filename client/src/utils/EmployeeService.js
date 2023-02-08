import TokenService from "./TokenService";

const EmployeeService = {
  getEmployeeFromStorage,
  getEmployeefromDb,
  changeEmail,
  resetStorageValue,
  changePassword,
  // signIn,
};

const BASE_URL = `${process.env.REACT_APP_BE_URL}/api/Employee`;

function getEmployeeFromStorage() {
  const employee = sessionStorage.getItem("employee");
  return employee ? JSON.parse(employee) : null;
}

function getEmployeefromDb(id, authToken) {
  return fetch(`${BASE_URL}/${id}/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

function changeEmail(id, newEmail) {
  const authToken = TokenService.getAuthToken();
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: newEmail }),
  }).then((response) => {
    if (response.ok) return response.json();
    console.log(response, "error in changeEmail utils");
  });
}

function resetStorageValue(employee) {
  return sessionStorage.setItem("employee", JSON.stringify(employee));
}

function changePassword(id, newPassword) {
  const authToken = TokenService.getAuthToken();
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: newPassword }),
  }).then((response) => {
    if (response.ok) return response.json();
    console.log(response, "error in changePassword utils");
  });
}

// async function signIn(email, password) {
//   return await fetch(`${BASE_URL}/signin`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       if (data.success) {
//         TokenService.setTokens();
//       } else {
//         console.log("success false", data.error);
//         throw new Error(data.error);
//       }
//     });
// }

export default EmployeeService;
