import React, { useState } from 'react';
import Card from './card';

function Formulario(props) {
  const { nombre, email } = props;

  const [formValues, setFormValues] = useState({
    nombre: nombre || '',
    email: email || ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);


      
  
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formValues.nombre.trim().length < 3 || formValues.nombre.trim().startsWith(' ')) {
      setErrorMessage('El nombre debe tener al menos 3 caracteres y no debe comenzar con espacios');
      return;
    }

    if (formValues.email.trim().length < 6) {
      setErrorMessage('El email debe tener al menos 6 caracteres');
      return;
    }

    console.log('Valores del formulario:', formValues);

    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <>
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre" value={formValues.nombre} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleInputChange} />
          <button type="submit">Enviar</button>
        </form>
      )}
      {submitted && (
        <Card>
            <p>Gracias profesor Oak por enviar la información</p>
            <img src="https://www.nicepng.com/png/full/268-2685396_charismatic-and-popular-professor-oak-often-appears-pokemon.png" />

          <p>Nombre: {formValues.nombre}</p>
          <p>Email: {formValues.email}</p>
        </Card>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default Formulario;