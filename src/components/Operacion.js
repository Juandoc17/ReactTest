import React from 'react'
//import { InputName } from './InputName';
//import { InputIndex} from './InputIndex';

export const Operacion = ({nombres, index}) => {
    
    function DoubleCola(nombres, index){
        index = index - 1; 
        while (index >= nombres.length) {
            index = Math.floor((index - nombres.length) / 2);
        }
        return nombres[index];
      }

    let resultado = DoubleCola(nombres,index);
    return (
        <div>
            <h1>El jugador número {index} en la fila es: {resultado}</h1>

        </div>
    )
}
