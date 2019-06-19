import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './assets/logo.svg';
import Quote from './components/quote';

function App() {

  const [quote, getQuote] = useState({});

  // consultar api
  const consultAPI = async() => {
    const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    // agregar el resultado de la api al state
    getQuote(result.data[0]);
  }

  // consulta a una rest api. Siempre se utiliza useEffect
  useEffect(() => {
    consultAPI();
  }, []);

  return (
    <div className="contenedor">
      <img className="logo-container" src={logo} alt="breaking bad logo" width="400px" height="400px"/>
      <Quote quote={quote} />
    </div>
  );
}

export default App;
