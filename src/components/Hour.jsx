import React, { useState, useEffect } from "react";

function Hour() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Atualizar a hora por segundo
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(timer);
    }, []);

    return (
        <div class="Hour">
            {time.toLocaleTimeString()} 
        </div>
    );
}

export default Hour;
