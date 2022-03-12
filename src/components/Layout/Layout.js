import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <div
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          padding: "1rem",
          fontWeight: "bold",
        }}
      >
        Built By Mark Mendoza
      </div>
    </>
  );
};

export default Layout;
