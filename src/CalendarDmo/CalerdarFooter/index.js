import React from "react";
import styles from "./CalendarFooter.module.css";

const CalendarFooter = ({ selectedPrice, selectedDate }) => {

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
    <div className={styles.calendarFooter}>
      {selectedPrice && (
        <div className={styles.footerColorText}>
          <div
            className={footerColorStyle(selectedDate)}
            style={{ height: 20, width: 45, marginRight: 10 }}
          />

          <p className={styles.footerText}>
            You have selected Standard Shipping - ${selectedPrice}. Your package
            will arrive on{" "}
            <strong>{selectedDate.format("MMMM DD").toString()}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarFooter;
