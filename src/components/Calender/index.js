import React from "react";
import CalenderLeft from "./components/CalenderLeft";
import CalenderRight from "./components/CalenderRight";

const Calender = () => {
  return (
    <div className="calender">
      <div className="calender-body">
        <CalenderLeft />
        <CalenderRight />
      </div>
      <div className="calender-footer">
        <div className="footer-color-text">
          <div className="footer-color" />
          <p className="footer-text">
            You have selected Standard Shipping - $9.99. Your package will
            arrive on <strong>October 14</strong> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calender;
