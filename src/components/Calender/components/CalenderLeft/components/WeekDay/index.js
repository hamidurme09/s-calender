import React, { useState } from "react";
import moment from "moment";

const WeekDay = ({ value, calendar, setSelectedDate }) => {
  const [overnight, setOvernight] = useState();

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

    if (day.format("dd") === "Mo" || day.format("dd") === "Su") {
      return "sunAndMon";
    }

    if (day.format("dd") === "Tu") {
      return "overnight";
    }

    if (day.format("dd") === "Sa") {
      return "saterday";
    }

    if (
      day.format("dd") === "We" ||
      day.format("dd") === "Th" ||
      day.format("dd") === "Fr"
    ) {
      return "standard";
    }

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
              {overnight && <p>$9.99</p>}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default WeekDay;
