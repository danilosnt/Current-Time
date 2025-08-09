import React from "react";
import Title from "./components/Title";
import GMT from "./components/GMT";

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Title />
            <GMT />
        </div>
    );
}

export default App;