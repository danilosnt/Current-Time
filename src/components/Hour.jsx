import React from "react";

function Hour({ gmtOffset, currentTime }) {
  const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
  const newTime = new Date(utcTime + gmtOffset * 3600000);

  return <h2 className="Hour">{newTime.toLocaleTimeString()}</h2>;
}

export default Hour;
