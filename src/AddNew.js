import React, {useState} from 'react';
import {Button, ListGroupItem, Input, Alert, Col, Row} from 'reactstrap';

function AddNew(props) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const inputHandlerName = (e) => {
        setName(e.target.value);
    }

    const inputHandlerNumber = (e) => {
        setNumber(parseInt(e.target.value));
    }
    function onSubmit(e) {
        e.preventDefault();
        props.adnc({name}, {number});
        setName('');
        setNumber ('');
    }
    return (
        <ListGroupItem onSubmit={onSubmit}>
                    <Alert  color='light'  className='name'>
                        Add new counter
                    </Alert>
                    <Input className='input1' type='text'
                           placeholder='Counter name'
                           value ={name}
                           required
                           onChange={inputHandlerName}/>
                    <Input className='input1' type="numbers"
                           placeholder="Counter value"
                           value = {number}
                           size = '10'
                           required
                           onChange={inputHandlerNumber}/>
                    <Button color="primary">Add counter</Button>
        </ListGroupItem>
    )
}

export default AddNew;