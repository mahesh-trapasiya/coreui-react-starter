import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="c-app c-default-layout">
      <Sidebar />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">{/* <TheContent /> */}</div>
        {/* <TheFooter /> */}
      </div>
    </div>
  );
};

export default Layout;
