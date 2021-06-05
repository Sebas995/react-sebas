import React, {useState} from 'react';
import Dato from './Dato';

const Memorize = () => {

    const [counter, setCounter] = useState(0);
    const [view, setView] = useState(true)

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <>
          <h1>Memorizes: <Dato value={counter}/></h1>
          <hr />

          <button onClick={handleClick}>+1</button>
          <button onClick={() => setView(!view)}>Ver/Quitar</button>
        </>
    )
}

export default Memorize;
