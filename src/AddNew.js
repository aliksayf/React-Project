import React, {useState} from 'react';

function AddNew(props) {
    let [name, setName] = useState('')
    let [number, setNumber] = useState('')

    const inputHandlerName = (e) => {
        setName(name = e.target.value);
    }

    const inputHandlerNumber = (e) => {
        setNumber(number = parseInt(e.target.value));
    }
    function onSubmit(e) {
        e.preventDefault();
        props.adnc({name}, {number});
        setName('');
        setNumber ('');
    }
    return (
        <form onSubmit={onSubmit}>
            Add new counter
            <input type='text'
                   placeholder='initial value'
                   value ={name}
                   required
                   onChange={inputHandlerName}/>
            <input type="number"
                   placeholder="Enter value"
                   value = {number}
                   size = '10'
                   required
                   onChange={inputHandlerNumber}/>
            <button >Add counter</button>
        </form>
    )
}

export default AddNew;