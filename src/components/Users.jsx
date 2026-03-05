import React from "react";
import { useState } from "react";
import { use } from "react";

const Users = ({ usersData }) => {
  const initialUsers = use(usersData);
  const [user, SetUser] = useState(initialUsers);

  const handleUsers = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const newUser = { name, email };

    //sending data to server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUsers = [...user, data];
        SetUser(newUsers);
      });
  };

  return (
    <div className="flex gap-5 justify-center items-center">
      <div>
        <h1>Add A new user</h1>
        <form onSubmit={handleUsers}>
          <label>Name</label> <br />
          <input
            className="border border-black p-1"
            name="name"
            type="text"
          ></input>{" "}
          <br />
          <label>Email</label> <br />
          <input
            className="border border-black p-1"
            name="email"
            type="email"
          ></input>{" "}
          <br />
          <button className="mt-3 bg-red-400 border border-black px-3 rounded-md ">
            Add
          </button>
        </form>
      </div>
      <div>
        <h1 className="underline text-blue-600">List of our user</h1>{" "}
        {user.map((user) => (
          <p key={user.id}>
            {user.id}. Name: {user.name} Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
