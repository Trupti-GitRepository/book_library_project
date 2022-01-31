import React, { Component } from "react"
import RegistrationForm from "../../Components/RegistrationForm"
import Navbar from "../../Components/Navbar"

const registration = () => {
  return <div>
    <Navbar />
    <div className="grid place-items-center h-screen">
      <RegistrationForm />
    </div>
  </div>;
};

export default registration;
