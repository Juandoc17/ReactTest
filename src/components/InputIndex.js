import React, { useState } from 'react'

var num;
const InputIndex = () => {
    const [index, setindex] = useState('52')

    const handleInputChange = (e) => {
        setindex(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (index.trim().length > 0) {
            num = Number(index);
            console.log('EntroNumber', num);

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Digita el indice:</h4>
                    <input type="number" id="index" value={index} onChange={handleInputChange} />
                </label>
                <input type="submit" className="boton_personalizado" value="Jugar!!" />
            </form>
        </div>
    )
}

export {InputIndex, num}
