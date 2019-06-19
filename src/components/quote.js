import React from 'react';


const Quote = ({quote}) => (
  <div className="frase">
    <h1>{quote.quote}</h1>
    <p>- {quote.author}</p>
  </div>
);


export default Quote;
