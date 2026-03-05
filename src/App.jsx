import React from "react";
import Users from "./components/Users";

const usersData = fetch("http://localhost:3000/users").then((res) =>
  res.json(),
);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-3 items-center justify-center">
      <h1 className="text-3xl text-red-400 text-center">Crud operation</h1>
      <Users usersData={usersData}></Users>
      
    </div>
  );
};

export default App;
