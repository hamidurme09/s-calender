import React, { useState } from "react";
import "./App.css";
import CalendarDmo from "./CalendarDmo";
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';

function App() {

  const [date, setDate] = useState(new Date())

  const onChange = date => {
    setDate(date)
  }

  return (
    <div>
      <CalendarDmo />
      {/* <Calendar onChange={onChange} value={date} /> */}
    </div>
  );
}

export default App;
