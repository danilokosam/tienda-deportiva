import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState } from "react";

const Layout = () => {
  const [navHeight, setNavHeight] = useState(0);

  const handleHeightChange = (height) => {
    setNavHeight(height);
  };

  return (
    <div>
      <NavBar onHeightChange={handleHeightChange} />
      <main style={{ marginTop: `${navHeight}px` }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
