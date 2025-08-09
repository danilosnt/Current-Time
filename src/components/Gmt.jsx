import React, { useState, useEffect } from "react";
import Hour from "./Hour";

function GMT() {
    const [gmtOffset, setGmtOffset] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            {/* Passa gmtOffset para Hour */}
            <Hour gmtOffset={gmtOffset} />

            <label>Selecione seu fuso horário:</label>
            <select
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
