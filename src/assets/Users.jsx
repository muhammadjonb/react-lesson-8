import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const usersData = async () =>{
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await res.json();
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
      usersData();
    }, []);

  return (
    <div className="api">
      <h1>Users</h1>
      <div className="users">
        {users.map((user) => (
          <div className="user" key={user.id}>
            <h3>{user.name}</h3>
            <span>{user.username}</span>
            <p>Email:{user.email}</p>
            <p>Website:{user.website}</p>
            <p>Address:{user.address.street}</p>
            <p>Phone:{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users