import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import Time from "./Time.js";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="container my-7 bg-base-300 p-5 text-center text-xl">
      <h2 className="text-5xl font-semibold mb-3">Appoinment</h2>
      <h5 className="text-2xl my-3">Please, select a date and time for the appoinment with Dr. Sabbir Asraful</h5>
      <div className="text-xl">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
        />
      </div>

      {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>
          {date.toDateString()}
        </p>
      )}
      <Time showTime={showTime} date={date} />
    </div>
  );
};

export default Booking;
