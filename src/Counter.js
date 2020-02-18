import React, {useState} from 'react';

function Counter(props) {
    const [value, setValue] = useState(props.num)
    const countChangeHandler = (sign) => {
        if (sign === '+') {
            setValue(value + 1);
            props.bc('+')
        }
        if (sign === '-') {
            setValue(value - 1);
            props.bc('-')
        }
    }

    return (
        <div className='counter'>
            {props.name}: {' '}
            <button onClick={() => countChangeHandler('-')}>-</button>
            {' '}{value}{' '}
            <button onClick={() => countChangeHandler('+')}>+</button>
            <hr/>
        </div>
    )
}

export default Counter;