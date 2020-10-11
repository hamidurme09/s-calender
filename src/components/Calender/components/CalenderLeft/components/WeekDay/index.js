import React from "react";
import moment from "moment";

const WeekDay = ({ value, calendar, setSelectedDate }) => {
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

  return (
    <>
      {calendar.map((week, i) => (
        <tr key={i}>
          {week.map((day, j) => (
            <td
              key={j}
              onClick={() => !beforeToday(day) && setSelectedDate(day)}
              className={dayStyles(day)}
            >
              {day.format("D").toString()}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default WeekDay;
