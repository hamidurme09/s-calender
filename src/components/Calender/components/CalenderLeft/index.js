import React, { useEffect, useState } from "react";
import moment from "moment";

import CalendarHeader from "./components/CalendarHeader";
import WeekDay from "./components/WeekDay";

const CalenderLeft = ({ value, setSelectedDate }) => {
  const weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  const [calendar, setCalendar] = useState([]);

  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");

  useEffect(() => {
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

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return moment(day).isBefore(new Date(), "day");
  }

  function isToday(day) {
    return moment(new Date()).isSame(day, "day");
  }

  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  // console.log(calendar);

  return (
    <div className="calender-left">
      <CalendarHeader value={value} setSelectedDate={setSelectedDate} />

      <div className="week">
        <table>
          <thead>
            <tr>
              {weekdays.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <WeekDay value={value} calendar={calendar} setSelectedDate={setSelectedDate} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalenderLeft;
