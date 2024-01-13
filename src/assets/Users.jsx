import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const usersData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPosts = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodos = () => {
    console.log("hello");
  };
  const getAlbums = () => {
    console.log("hello");
  };

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
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <p>Address: {user.address.street}</p>
            <p>Phone: {user.phone}</p>
            <div className="user_btn">
              <button onClick={() => getPosts(user.id)}>Posts</button>
              <button onClick={() => getTodos(user.id)}>Todos</button>
              <button onClick={() => getAlbums(user.id)}>Album</button>
            </div>
          </div>
        ))}
      </div>
      <div className="blog_posts">
        <div className="container">
            <h1>Posts</h1>
          <div className="posts">
            {posts.map((post) => {
                <div className="post" key={post.id}>
                    <h4>{post.title}</h4>
                </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
