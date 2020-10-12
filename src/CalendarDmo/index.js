import React, { useState } from "react";
import styles from "./CalendarDmo.module.css";
import moment from "moment";
import CalendarLeft from "./CalendarLeft";
import CalendarRight from "./CalendarRight";
import CalendarFooter from "./CalerdarFooter";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedPrice, setSelectedPrice] = useState();

  return (
    <div>
      <div className={styles.calendarContainer}>
        <CalendarLeft
          setSelectedPrice={setSelectedPrice}
          selectedPrice={selectedPrice}
          value={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <CalendarRight />
      </div>
      <CalendarFooter
        selectedDate={selectedDate}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

export default Calendar;
