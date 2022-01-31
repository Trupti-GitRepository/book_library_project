import React, { Component } from "react"
import LoginForm from "../../Components/LoginForm";
import Navbar from "../../Components/Navbar";

const login = () => {
  return <div>
    <Navbar />
    <div className="grid place-items-center h-screen">
      <LoginForm />
    </div>
  </div>;
};

export default login;
