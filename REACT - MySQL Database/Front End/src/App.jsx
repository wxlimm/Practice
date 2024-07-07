import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  },[])
  return(
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
          <th>Contact</th>
        </thead>
        <tbody>
          {data.map((users, i) => (
            <tr key={i}>
              <td>{users.userid}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>{users.type}</td>
              <td>{users.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App