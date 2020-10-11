import React, { useState } from "react";
import moment from "moment";
import styles from "./Calendar.module.css";

import CalenderLeft from "./components/CalendarLeft";
import CalenderRight from "./components/CalendarRight";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedPrice, setSelectedPrice] = useState();

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
    <div className={styles.calender}>
      <div className={styles.calenderBody}>

        <CalenderLeft
          setSelectedPrice={setSelectedPrice}
          selectedPrice={selectedPrice}
          value={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <CalenderRight />

      </div>

      <div className={styles.calenderFooter}>

        {
          selectedPrice && (
            <div className={styles.footerColorText}>

              <div
                className={footerColorStyle(selectedDate)}
                style={{ height: 20, width: 45, marginRight: 10 }}
              />

              <p className={styles.footerText}>
                You have selected Standard Shipping - ${selectedPrice}. Your
                package will arrive on{" "}
                <strong>{selectedDate.format("MMMM DD").toString()}</strong>
              </p>
              
            </div>
          )
        }

      </div>
    </div>
  );
};

export default Calender;
