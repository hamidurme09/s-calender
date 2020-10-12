import React, { useEffect, useState } from "react";
import styles from "./CalendarLeft.module.css";
import Date from "./Date";
import CalendarLeftHeader from "./CalendarLeftHeader";

const CalendarLeft = ({
  value,
  setSelectedDate,
  selectedPrice,
  setSelectedPrice,
}) => {

  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");

    const calendarArr = [];
    while (day.isBefore(endDay, "day")) {
      calendarArr.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }

    if (calendarArr.length < 6) {
      calendarArr.push(
        Array(7)
          .fill(0)
          .map(() => endDay.add(1, "day").clone())
      );
    }

    setCalendar(calendarArr);
  }, [value]);

  return (
    <div className={styles.calendarLeft}>
      <div className={styles.calendarBody}>

        <CalendarLeftHeader value={value} setSelectedDate={setSelectedDate} />

        <div className={styles.dayNames}>
          {["su", "mo", "tu", "we", "th", "fr", "sa"].map((d, i) => (
            <div className={styles.week} key={i}>
              {d}
            </div>
          ))}
        </div>

        <Date
          value={value}
          calendar={calendar}
          setSelectedDate={setSelectedDate}
          setSelectedPrice={setSelectedPrice}
          selectedPrice={selectedPrice}
        />
      </div>
    </div>
  );
};

export default CalendarLeft;
