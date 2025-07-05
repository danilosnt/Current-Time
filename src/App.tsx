import { useState } from 'react';

function App() {
  const [dolar, setDolar] = useState('');
  const [euro, setEuro] = useState(null);

  const converter = async () => {
    if (!dolar) return;
    const response = await fetch(`https://api.exchangerate.host/convert?from=USD&to=EUR&amount=${dolar}`);
    const data = await response.json();
    setEuro(data.result.toFixed(2));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Conversor de Dólar para Euro</h1>
      <input
        type="number"
        placeholder="Digite o valor em USD"
        value={dolar}
        onChange={e => setDolar(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <button onClick={converter}>Converter</button>
      {euro !== null && (
        <p>Valor em Euro: <strong>€ {euro}</strong></p>
      )}
    </div>
  );
}

export default App;
