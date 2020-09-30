import React, { useState } from 'react'

var namesi=[];
var arr = [];
const InputName = () => {
  const [names, setnames] = useState('Sheldon, Leonard, Penny, Rajesh, Howard');
  

  const handleInputChange = (e) => {
    setnames(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (names.trim().length > 2) {
      console.log('Entro');
      arr = names.trim().split(",")
      namesi = arr;
      console.log(arr);
      setnames('');
      alert('Jugaras con: ' + arr);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Nombres separados por comas:</h4>
          <input type="text" id="nombres" value={names} onChange={handleInputChange} />
        </label>
        <input type="submit" className="boton_personalizado" value="Agregar" />
      </form>
    </div>
  )
}
export {InputName, namesi}
