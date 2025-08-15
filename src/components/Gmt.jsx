import React, { useState, useEffect } from "react";
import Hour from "./Hour";

function GMT() {
  const [gmtOffset, setGmtOffset] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Atualiza o estado a cada segundo
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container" id="clock">
      <Hour gmtOffset={gmtOffset} currentTime={currentTime} />
      <label className="GMT">Select your time zone: </label>
      <select
        className="button_gmt"
        value={gmtOffset}
        onChange={(e) => setGmtOffset(Number(e.target.value))}
      >
        {Array.from({ length: 25 }, (_, i) => i - 12).map((offset) => (
          <option key={offset} value={offset}>
            GMT{offset >= 0 ? `+${offset}` : offset}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GMT;
