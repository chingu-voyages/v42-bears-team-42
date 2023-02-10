export default async function samFetch (endpoint, method, body, auth) {
  const authToken = sessionStorage.getItem('authToken');
  console.log('fetching to endpoint');
  // console.log(sessionStorage);
  console.log('authToken', authToken)
  return await fetch(`${process.env.REACT_APP_BE_URL}/${endpoint}`, {
      method: method,
      body: body,
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
      },
  }).then((data) => data.json());
}