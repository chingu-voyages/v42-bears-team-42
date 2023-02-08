const TokenService = {
  setTokens,
  getAuthToken,
  removeToken,
};

function setTokens(authToken) {
  if (authToken) {
    sessionStorage.setItem("authToken", authToken);
    sessionStorage.setItem("employee", JSON.stringify(authToken.employee));
  } else {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("employee");
  }
}

function getAuthToken() {
  return sessionStorage.getItem("authToken");
}

function removeToken() {
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("employee");
}

export default TokenService;
