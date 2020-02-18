import React, {useState} from 'react';

function Counter(props) {
    const [value, setValue] = useState(props.num)
    const countChangeHandler = (sign) => {
        if (sign === '+') {
            setValue(value + 1);
            props.bc('+', props.id, value + 1)
            props.update(props.name, (props.num + 1), props.id);
            console.log(value);
        }
        console.log(value)
        if (sign === '-') {
            setValue(value - 1);
            props.bc('-')
        }
    }

    const reset = () => {
        props.update(props.name, 0,props.id)
        setValue(value - value);
    }



    return (
        <div className='counter'>
            {props.name}: {' '}
            <button onClick={() => countChangeHandler('-')}>-</button>
            {' '}{props.num}{' '}
            <button onClick={() => countChangeHandler('+')}>+</button>
            <button onClick={reset}>Reset {props.name}</button>
            <button onClick={() => props.delCounter(props.id)}>Delete {props.name}</button>
            <hr/>
        </div>
    )
}

export default Counter;