import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import styles from './CalendarLeftHeader.module.css'

const CalendarLeftHeader = ({ value, setSelectedDate }) => {
  function currMonthName() {
    return value.format("MMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className={styles.headerContainer}>
      {!thisMonth() && (
        <FontAwesomeIcon
          onClick={() => !thisMonth() && setSelectedDate(prevMonth())}
          icon={faCaretLeft}
          style={{ cursor: "pointer" }}
        />
      )}

      <h4 className={styles.header}>
        {currMonthName()} {currYear()}
      </h4>

      <FontAwesomeIcon
        onClick={() => setSelectedDate(nextMonth())}
        icon={faCaretRight}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default CalendarLeftHeader;
