import React from "react";
import "./PageTitleBanner.css";

const PageTitleBanner = (props) => {
  return (
    <div className="page-title-banner">
      <div className="page-title-sub-div">
        <h1>{props.title}</h1>
        <h6>Home / {props.subtitle}</h6>
      </div>
    </div>
  );
};

export default PageTitleBanner;
