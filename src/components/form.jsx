import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        obraSocial: '',
        email: '',
        medico: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 8 && user.medico !== '') {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre Completo</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Obra social</label>
            <input type="text" value={user.obraSocial} onChange={(e) => setUser({...user, obraSocial: e.target.value})}/>
            <label>Email</label>
            <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
            <select value={user.medico} onChange={(e) => setUser({...user, medico: e.target.value})}>
                <option value="">Seleccione una opción</option>
                <option value="Dermatologo">Dermatologo</option>
                <option value="Otorrinolaringologo">Otorrinolaringologo</option>
                <option value="Clínico">Clínico</option>
            </select>
            <button>Enviar</button>
            {err && 'Coloque la información correspondiente'}
        </form>
        {show  && <Card nombre={user.nombre} medico={user.medico}/>}
        {/* {show  ? <Card nombre={user.nombre} medico={user.medico}/> : null} */}

    </div>
  )
}
