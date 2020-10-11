import React from "react";
import moment from "moment";

import style from './WeekDay.module.css'

// const holiday = ["October 21", "October 30"];

const WeekDay = ({
  value,
  calendar,
  setSelectedDate,
  setSelectedPrice,
  selectedPrice,
}) => {
  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return moment(day).isBefore(new Date(), "day");
  }

  function sunMonHoliday(day) {
    if (
      day.format("dd") === "Mo" ||
      day.format("dd") === "Su" ||
      day.format("MMMM DD") === "October 21"
    ) {
      return true;
    }

    if (handleHoliday(day)) {
      return true;
    }

    return false;
  }

  function isToday(day) {
    return moment(new Date()).isSame(day, "day");
  }

  const handleHoliday = (day) => {
    const holiday = ["October 21", "October 30", "November 25"];

    let isHoliday = false;
    holiday.map((hday) => {
      if (day.format("MMMM DD") === hday) {
        isHoliday = true;
      }
    });
    return isHoliday;
  };

  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";

    if (handleHoliday(day)) return "before";

    if (day.format("dd") === "Mo" || day.format("dd") === "Su") {
      return "before";
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

  const handleDatePrice = (day) => {
    setSelectedDate(day);

    if (day.format("dd") === "Tu") {
      setSelectedPrice(79.99);
    }

    if (day.format("dd") === "Sa") {
      setSelectedPrice(9.99);
    }

    if (
      day.format("dd") === "We" ||
      day.format("dd") === "Th" ||
      day.format("dd") === "Fr"
    ) {
      setSelectedPrice(9.99);
    }
  };

  return (
    <>
      {calendar.map((week, i) => (
        <tr key={i}>
          {week.map((day, j) => (
            <td
              key={j}
              onClick={() =>
                !sunMonHoliday(day) && !beforeToday(day) && handleDatePrice(day)
              }
              className={dayStyles(day)}
            >
              {day.format("D").toString()}

              {!beforeToday(day) && day.format("dd") === "Tu" && <p>$79.99</p>}

              {!beforeToday(day) &&
                (day.format("dd") === "We" ||
                  day.format("dd") === "Th" ||
                  day.format("dd") === "Fr") && <p>$9.99</p>}

              {!beforeToday(day) && day.format("dd") === "Sa" && <p>$9.99</p>}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default WeekDay;
