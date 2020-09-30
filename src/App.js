import React from 'react'
import { InputName, namesi } from './components/InputName';
import { InputIndex, num } from './components/InputIndex';
import { Operacion } from './components/Operacion';
import './App.css';

export const App = () =>{
console.log('arreglo desde index',namesi);
console.log('index desde index',num);
  return (
    <>
      <h1 className="titulo">Double Cola! WhoIsNext?</h1>
      <h4 className="titulo2">Instrucciones: </h4>
      <ol id="lista2">
        <li> Digita los nombres de tus jugadores, luego pulsa el boton agregar</li>
        <li> Digita el nombre del indice que desea saber</li>
        <li> ¡Diviertete!</li>
      </ol>
      <hr />
      <InputName/>
      <InputIndex/>
      <hr/>
      <Operacion nombres={["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]} index={52}/>
    </>
  );
}


export default App;

