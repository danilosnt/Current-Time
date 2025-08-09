import React, { useState, useEffect } from "react";
import Hour from "./Hour";

function GMT() {
    const [gmtOffset, setGmtOffset] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {}, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container">
            <Hour gmtOffset={gmtOffset} />
            <label class="GMT">Select your time zone: </label>
            <select class="button_gmt"
                value={gmtOffset}
                onChange={(e) => setGmtOffset(Number(e.target.value))}>
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
