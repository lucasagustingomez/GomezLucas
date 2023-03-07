// Card.jsx
import React from 'react';

function Card(props) {
  const { children, errorMessage, nombre, email } = props;

  return (
    <div className="card">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {nombre && <div>Nombre: {nombre}</div>}
      {email && <div>Email: {email}</div>}
      {children}
    </div>
  );
}

export default Card;