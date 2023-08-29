import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import UserDataC from "./../components/signin/ChangePass";

export default function UserData() {
  return (
    <div>
      <Navbar />
      <UserDataC />
      <Footer />
    </div>
  );
}