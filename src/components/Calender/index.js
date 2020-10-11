import React, { useState, useEffect } from "react";
import moment from "moment";

import CalenderLeft from "./components/CalenderLeft";
import CalenderRight from "./components/CalenderRight";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  // console.log(selectedDate.format("DD MMMM YYYY"))

  useEffect(() => {
    
  }, [selectedDate]);

  function footerColorStyle(day) {

    if (day.format("dd") === "Tu") {
      return "overnight";
    }

    if (
      day.format("dd") === "We" ||
      day.format("dd") === "Th" ||
      day.format("dd") === "Fr"
    ) {
      return "standard";
    }

    if (day.format("dd") === "Sa") {
      return "saterday";
    }

    return "";
  }

  return (
    <div className="calender">
      <div className="calender-body">
        <CalenderLeft value={selectedDate} setSelectedDate={setSelectedDate} />
        <CalenderRight />
      </div>
      <div className="calender-footer">
        <div className="footer-color-text">
          <div
            className={footerColorStyle(selectedDate)}
            style={{ height: 20, width: 45, marginRight: 10 }}
          />
          <p className="footer-text">
            You have selected Standard Shipping - $9.99. Your package will
            arrive on{" "}
            <strong>{selectedDate.format("MMMM DD").toString()}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calender;
