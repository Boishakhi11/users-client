import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-3 items-center justify-center">
      <h1 className="text-3xl text-red-400 text-center">Crud operation</h1>
      <form>
        <label>Name</label> <br />
        <input className="border border-black " type="text"></input> <br />
        <label>Email</label> <br />
        <input className="border border-black" type="email"></input> <br />
        <button className="mt-3 bg-red-400 border border-black px-3 rounded-md ">
          Add
        </button>
      </form>
    </div>
  );
};

export default App;
