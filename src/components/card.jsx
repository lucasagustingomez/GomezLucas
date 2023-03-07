import React from 'react'

const card = ({nombre, medico}) => {
    const date = new date()
    const dia = date.getDate()
    const mes = date.getMonth()

  return (
    <div>
      <h3>{nombre}, Sacaste turno con el medico {medico}</h3>
      <h3>Tenes pactado un turno para el día {dia}/{mes+1} para las 16:00</h3>
    </div>
  )
}

export default card
