import React from "react";
import RecruitmentMain from "../components/recruitments/RecruitmentMain";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

function Featured() {
  return (
    <div>
      <Navbar />
      <RecruitmentMain />
      <Footer />
    </div>
  );
}

export default Featured;
