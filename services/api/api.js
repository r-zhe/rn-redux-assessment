export const getUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET'
  })
  .then(res=>res.json())
}