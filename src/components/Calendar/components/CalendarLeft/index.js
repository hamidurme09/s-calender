import React, { useEffect, useState } from "react";

import CalendarHeader from "./components/CalendarHeader";
import WeekDay from "./components/WeekDay";

import styles from './CalendarLeft.module.css'

const CalenderLeft = ({
  value,
  setSelectedDate,
  selectedPrice,
  setSelectedPrice,
}) => {
  const weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

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
      <CalendarHeader value={value} setSelectedDate={setSelectedDate} />

      <div>
        <table>

          <thead>
            <tr>
              {weekdays.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <WeekDay
              value={value}
              calendar={calendar}
              setSelectedDate={setSelectedDate}
              setSelectedPrice={setSelectedPrice}
              selectedPrice={selectedPrice}
            />
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default CalenderLeft;
