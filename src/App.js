import React, { useState } from 'react';
import './App.css';

function App() {
  const [hora, setHora] = useState(null);

  const obtenerHora = async () => {
    try {
      const response = await fetch('http://localhost:3000/hora');
      const data = await response.json();
      console.log(data); 
      setHora(data.hora);
    } catch (error) {
      console.error("Error al obtener la hora:", error);
    }
  };

  const obtenerHoraDesdeDB = async () => {
    try {
      const response = await fetch('http://localhost:3000/db');
      const data = await response.json();
      console.log(data);
      setHora(data[0]?.now);
    } catch (error) {
      console.error("Error al obtener la hora desde la base de datos:", error);
    }
  };

  return (
    <div className="App">
      <h1>Cliente conectado a la base de datos</h1>
      <div className="button-container"> {/* Nuevo contenedor */}
        <button onClick={obtenerHora} className="button">Hora de la petición</button>
        <button onClick={obtenerHoraDesdeDB} className="button">Hora desde DB</button>
      </div>
      {hora && <p>Has hecho click a las: {hora}</p>}
    </div>
  );
}

export default App;
