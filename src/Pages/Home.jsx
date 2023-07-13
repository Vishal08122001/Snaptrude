import React from "react";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="d-flex" style={{flexDirection:"column", height:"100vh", justifyContent:"space-between"}}>
      <Navbar />
      <div className="container-fluid " >
        <Main />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
