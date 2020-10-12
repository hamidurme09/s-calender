import React from "react";
import moment from "moment";

import styles from "./WeekDay.module.css";

const WeekDate = ({
  value,
  calendar,
  setSelectedDate,
  setSelectedPrice,
}) => {
  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return moment(day).isBefore(new Date(), "day");
  }

  function sunMonHoliday(day) {
    if (day.format("dd") === "Mo" || day.format("dd") === "Su") {
      return true;
    }

    if (handleHoliday(day)) {
      return true;
    }

    return false;
  }

  // function isToday(day) {
  //   return moment(new Date()).isSame(day, "day");
  // }

  const handleHoliday = (day) => {
    const holiday = ["November 26"];

    let isHoliday = false;

    holiday.map((hday) => {
      if (day.format("MMMM DD") === hday) {
        isHoliday = true;
      }
    });

    return isHoliday;
  };

  function dayStyles(day) {
    // if (isSelected(day)) return "selected";
    // if (isToday(day)) return "today";

    if (beforeToday(day) || handleHoliday(day) || day.format("dd") === "Mo" || day.format("dd") === "Su") {
      return styles.before;
    }
    
    if (day.format("dd") === "Tu") {
      if (isSelected(day)) return styles.overnightSelected;
      
      return styles.overnight;
    }

    if (day.format("dd") === "Sa") {
      if (isSelected(day)) return styles.saterdaySelected;

      return styles.saterday;
    }

    if (
      day.format("dd") === "We" ||
      day.format("dd") === "Th" ||
      day.format("dd") === "Fr"
    ) {
      if (isSelected(day)) return styles.standardSelected;

      return styles.standard;
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
    <div>
      {
        calendar.map((week, i) => (
          <div key={i} className={styles.dateNames}>

            {
              week.map((day, j) => (
                <div key={j} className={styles.weekDay}>

                  <div
                    className={dayStyles(day)}
                    onClick={() =>
                      !sunMonHoliday(day) &&
                      !beforeToday(day) &&
                      handleDatePrice(day)
                    }
                    style={{padding: 5}}
                  >

                    <p>{day.format("D").toString()}</p>

                    {
                      !beforeToday(day) && day.format("dd") === "Tu" && (
                        <p className={styles.price}>$79.99</p>
                      )
                    }

                    {
                      !beforeToday(day) &&
                        (day.format("dd") === "We" ||
                          day.format("dd") === "Th" ||
                          day.format("dd") === "Fr") && (
                          <p className={styles.price}>$9.99</p>
                        )
                    }

                    {
                      !beforeToday(day) && day.format("dd") === "Sa" && (
                        <p className={styles.price}>$9.99</p>
                      )
                    }

                  </div>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default WeekDate;
