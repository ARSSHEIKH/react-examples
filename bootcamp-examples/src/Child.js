import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = (props) => {
    let counterValue = useContext(CounterContext)
    console.log(counterValue);
    return(
        <div>
            <h2>This is child props {props.name}</h2>
        </div>
    )
}

export default Child;

