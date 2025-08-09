import React from "react";

function Hour({ gmtOffset }) {
    const time = new Date();
    const utcTime = time.getTime() + time.getTimezoneOffset() * 60000;
    const newTime = new Date(utcTime + gmtOffset * 3600000);

    return <h2 class="Hour">{newTime.toLocaleTimeString()}</h2>;
}

export default Hour;
